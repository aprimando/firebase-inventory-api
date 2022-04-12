import {Request, Response} from 'express';
import {
  OK,
  CREATED,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from 'http-status';

import {inventory} from '../models';
import {HttpException} from '../exceptions';
import {logger} from '../helpers';

/**
 * Tag for logging
 */
const TAG = '[controllers] [inventory]';

/**
 * Handler to get list of inventory items
 * @param {Request} req - Http request object
 * @param {Response} res - Http response object
 * @return {Promise<void>}
 */
export const getList = async (req: Request, res: Response) => {
  logger.info(`${TAG} [GET /]`);

  try {
    const items = await inventory.get();

    if (!items?.length) {
      throw new HttpException(
          BAD_REQUEST,
          'Failed to get list of items',
      );
    }

    res.status(OK).send({items});
  } catch ({
    message,
    code,
    errors = [],
  }) {
    logger.error(`${TAG} [GET /]`, {
      message: `Something went wrong: ${message}`,
    });
    res.status(code as number || INTERNAL_SERVER_ERROR)
        .send({
          message: `Something went wrong: ${message}`,
          errors,
        });
  }
};

/**
 * Handler to get an inventory item
 * @param {Request} req - Http request object
 * @param {Response} res - Http response object
 * @return {Promise<void>}
 */
export const getItem = async (req: Request, res: Response) => {
  const {id} = req.params;

  logger.info(`${TAG} [GET /${id}]`);

  try {
    const item = await inventory.find(id);

    if (!item) {
      throw new HttpException(
          BAD_REQUEST,
          'Failed to get a product',
      );
    }

    res.status(OK).send({item});
  } catch ({
    message,
    code,
    errors = [],
  }) {
    logger.error(`${TAG} [GET /${id}]`, {
      message: `Something went wrong: ${message}`,
    });
    res.status(code as number || INTERNAL_SERVER_ERROR)
        .send({
          message: `Something went wrong: ${message}`,
          errors,
        });
  }
};

/**
 * Handler to create an inventory item
 * @param {Request} req - Http request object
 * @param {Response} res - Http response object
 * @return {Promise<void>}
 */
export const createItem = async (req: Request, res: Response) => {
  logger.info(`${TAG} [POST /]`);

  try {
    const item = await inventory.create(req.body);

    if (!item) {
      throw new HttpException(
          BAD_REQUEST,
          'Failed to create a product',
      );
    }

    res.status(CREATED).send({
      message: 'Successfully created an item',
      item,
    });
  } catch ({
    message,
    code,
    errors = [],
  }) {
    logger.error(`${TAG} [POST /]`, {
      message: `Something went wrong: ${message}`,
    });
    res.status(code as number || INTERNAL_SERVER_ERROR)
        .send({
          message: `Something went wrong: ${message}`,
          errors,
        });
  }
};

/**
 * Handler to update an inventory item
 * @param {Request} req - Http request object
 * @param {Response} res - Http response object
 * @return {Promise<void>}
 */
export const updateItem = async (req: Request, res: Response) => {
  logger.info(`${TAG} [PUT /]`);

  try {
    const itemId = await inventory.update(
        req.params.id,
        req.body,
    );

    if (!itemId) {
      throw new HttpException(
          BAD_REQUEST,
          'Failed to update an item',
      );
    }

    res.status(OK).send({
      message: `Successfully updated an item: ${itemId}`,
    });
  } catch ({
    message,
    code,
    errors = [],
  }) {
    logger.error(`${TAG} [PUT /]`, {
      message: `Something went wrong: ${message}`,
    });
    res.status(code as number || INTERNAL_SERVER_ERROR)
        .send({
          message: `Something went wrong: ${message}`,
          errors,
        });
  }
};

/**
 * Handler to delete an inventory item
 * @param {Request} req - Http request object
 * @param {Response} res - Http response object
 * @return {Promise<void>}
 */
export const deleteItem = async (req: Request, res: Response) => {
  logger.info(`${TAG} [DELETE /]`);

  try {
    const itemId = await inventory.remove(req.params.id);

    if (!itemId) {
      throw new HttpException(
          BAD_REQUEST,
          'Failed to delete an item',
      );
    }

    res.status(OK).send({
      message: `Successfully deleted an item: ${itemId}`,
    });
  } catch ({
    message,
    code,
    errors = [],
  }) {
    logger.error(`${TAG} [DELETE /]`, {
      message: `Something went wrong: ${message}`,
    });
    res.status(code as number || INTERNAL_SERVER_ERROR)
        .send({
          message: `Something went wrong: ${message}`,
          errors,
        });
  }
};
