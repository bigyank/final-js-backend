import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';

import userService from '../services/user.service.js';

// eslint-disable-next-line import/prefer-default-export
export async function getProfileInfo(req, res) {
  const { id } = req.user;
  const foundUser = await userService.findUser({ id });

  // since jwt is valid, id should exists
  if (!foundUser) {
    throw new createError.InternalServerError();
  }

  res.status(StatusCodes.ACCEPTED).send(foundUser);
}
