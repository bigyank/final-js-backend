import { StatusCodes, getReasonPhrase } from 'http-status-codes';

import buildError from '../utils/buildError.js';

/**
 * Method not allowed error middleware. This middleware should be placed at
 * the very bottom of the middleware stack.
 *
 * @param {Object} req
 * @param {Object} res
 */
export function methodNotAllowed(req, res) {
  res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
    code: StatusCodes.METHOD_NOT_ALLOWED,
    message: getReasonPhrase(StatusCodes.METHOD_NOT_ALLOWED),
  });
}

/**
 * Generic error response middleware for validation and internal server errors.
 *
 * @param  {Object}   err
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
export function genericErrorHandler(err, req, res, next) {
  const error = buildError(err);
  res.status(error.code).json({ error });
}
