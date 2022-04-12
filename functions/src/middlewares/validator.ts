import {
  Request,
  Response,
  NextFunction,
} from 'express';
import {BAD_REQUEST} from 'http-status';

import {inventory} from '../models';

/**
 * Middleware to check inventory id
 * @param {Request} req - Http request object
 * @param {Response} res - Http response object
 * @param {NextFunction} next - Http middleware
 * @return {Response|NextFunction} - Http response
 */
export const inventoryGetItem = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
  if (!req.params.id) {
    return res.status(BAD_REQUEST)
        .send({
          message: 'Parameter `id` is required',
        });
  }

  next();
};

/**
 * Middleware to check inventory id and item
 * @param {Request} req - Http request object
 * @param {Response} res - Http response object
 * @param {NextFunction} next - Http middleware
 * @return {Response|NextFunction} - Http response
 */
export const inventoryUpdateItem = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
  const {id} = req.params;

  if (!id) {
    return res.status(BAD_REQUEST)
        .send({
          message: 'Parameter `id` is required',
        });
  }

  if (!(await inventory.find(id))) {
    return res.status(BAD_REQUEST)
        .send({
          message: `Item not found: ${id}`,
        });
  }

  const {
    name,
    basePrice,
    quantity,
  } = req.body;

  if (!name && !basePrice && !quantity) {
    return res.status(BAD_REQUEST)
        .send({
          message: 'Enter `name` | `basePrice` | '  +
            '`quantity` to update',
        });
  }

  next();
};

/**
 * Middleware to check inventory id and item existence
 * @param {Request} req - Http request object
 * @param {Response} res - Http response object
 * @param {NextFunction} next - Http middleware
 * @return {Response|NextFunction} - Http response
 */
export const inventoryDeleteItem = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
  const {id} = req.params;

  if (!id) {
    return res.status(BAD_REQUEST)
        .send({
          message: 'Parameter `id` is required',
        });
  }

  if (!(await inventory.find(id))) {
    return res.status(BAD_REQUEST)
        .send({
          message: `Item not found: ${id}`,
        });
  }

  next();
};
