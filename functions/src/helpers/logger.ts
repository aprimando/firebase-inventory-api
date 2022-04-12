import * as logger from 'firebase-functions/logger';

import {LogData} from '../types';

/**
 * Logger with information level
 * @param {string} tag - Logging tag
 * @param {LogData} data - Log data
 * @return {void}
 */
export const info = (tag: string, data?: LogData) => {
  logger.info(
      {tag, data},
      {structuredData: true},
  );
};

/**
 * Logger with warning level
 * @param {string} tag - Logging tag
 * @param {LogData} data - Log data
 * @return {void}
 */
export const warn = (tag: string, data?: LogData) => {
  logger.warn(
      {tag, data},
      {structuredData: true},
  );
};

/**
 * Logger with error level
 * @param {string} tag - Logging tag
 * @param {LogData} data - Log data
 * @return {void}
 */
export const error = (tag: string, data?: LogData) => {
  logger.warn(
      {tag, data},
      {structuredData: true},
  );
};
