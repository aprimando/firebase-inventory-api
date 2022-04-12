import {firestore} from 'firebase-admin';

import {InventoryItem, InventoryItemUpdate} from '../types';
import {logger} from '../helpers';

/**
 * Firebase collection
 */
const collection = firestore().collection('inventory');

/**
 * Tag for logging
 */
const TAG = '[models] [inventory]';

/**
 * Get list of items
 * @return {Promise<InventoryItem[] | null>} - List of inventory items
 */
export const get = async (): Promise<InventoryItem[]> => {
  logger.info(`${TAG} [get]`);

  try {
    const snapshot = await collection.get();
    const items: InventoryItem[] = [];

    snapshot.forEach(
        (doc) => items.push({
          id: doc.id,
          ...doc.data(),
        } as InventoryItem)
    );

    return items;
  } catch ({message}) {
    logger.error(`${TAG} [get]`, {
      message: `Something went wrong: ${message}`,
    });
  }

  return [];
};

/**
 * Find an item
 * @param {string} id - Inventory item id
 * @return {Promise<InventoryItem | null>} - Inventory item or null
 */
export const find = async (id: string): Promise<InventoryItem | null> => {
  logger.info(`${TAG} [find]`);

  try {
    const snapshot = await collection.doc(id).get();

    if (!snapshot.exists) {
      throw new Error('Product not found');
    }

    return {
      id: snapshot.id,
      ...snapshot.data(),
    } as InventoryItem;
  } catch ({message}) {
    logger.error(`${TAG} [find]`, {
      message: `Something went wrong: ${message}`,
    });
  }

  return null;
};

/**
 * Create an item
 * @param {InventoryItem} item - Inventory item
 * @return {Promise<InventoryItem | null>} - Inventory item created or null
 */
export const create = async (
    item: InventoryItem,
): Promise<InventoryItem | null> => {
  logger.info(`${TAG} [create]`);

  try {
    await collection.add(item);

    return item;
  } catch ({message}) {
    logger.error(`${TAG} [create]`, {
      message: `Something went wrong: ${message}`,
    });
  }

  return null;
};

/**
 * Update an item
 * @param {string} id - Inventory item id
 * @param {InventoryItemUpdate} item - Inventory item update
 * @return {Promise<string | null>} - Inventory id or null
 */
export const update = async (
    id: string,
    item: InventoryItemUpdate,
): Promise<string | null> => {
  logger.info(`${TAG} [update]`);

  try {
    await collection.doc(id).update(item);

    return id;
  } catch ({message}) {
    logger.error(`${TAG} [update]`, {
      message: `Something went wrong: ${message}`,
    });
  }

  return null;
};

/**
 * Remove an item
 * @param {string} id - Inventory item id
 * @return {Promise<string | null>} - Inventory id or null
 */
export const remove = async (id: string): Promise<string | null> => {
  logger.info(`${TAG} [remove]`);

  try {
    await collection.doc(id).delete();

    return id;
  } catch ({message}) {
    logger.error(`${TAG} [remove]`, {
      message: `Something went wrong: ${message}`,
    });
  }

  return null;
};
