import createError from "http-errors";

/**
 * Middleware to handle empty JSON body requests and other edge cases if any.
 *
 * @param  {Object}   request
 * @param  {Object}   response
 * @param  {Function} next
 */

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export default function json(req, _res, next) {
  const { body, method } = req;
  const disallowedHttpHeaders = ["PUT", "POST", "PATCH"];

  if (
    req.is("application/json") &&
    disallowedHttpHeaders.includes(method) &&
    isEmpty(body)
  ) {
    throw new createError.BadRequest();
  }

  next();
}
