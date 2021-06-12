import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { isCelebrateError } from 'celebrate';
import { isHttpError } from 'http-errors';

/**
 * Build error response for validation errors.
 *
 * @param   {Error} error
 * @returns {Object}
 */
function buildError(error) {
  console.log(error);
  // return is validation error
  if (isCelebrateError(error)) {
    const message =
      error.details.get('body')?.message || 'something went wrong';
    return { code: StatusCodes.BAD_GATEWAY, message };
  }

  //   return if http error
  if (isHttpError(error)) {
    return {
      code: error.status,
      message: error.message,
    };
  }

  //   if invalaid token
  if (error.name === 'UnauthorizedError') {
    return {
      code: StatusCodes.UNAUTHORIZED,
      message: ReasonPhrases.UNAUTHORIZED,
    };
  }

  // Return INTERNAL_SERVER_ERROR for all other cases
  return {
    code: StatusCodes.INTERNAL_SERVER_ERROR,
    message: ReasonPhrases.INTERNAL_SERVER_ERROR,
  };
}

export default buildError;
