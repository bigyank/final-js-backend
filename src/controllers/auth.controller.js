import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';

import userService from '../services/user.service.js';

import { comparePassword, hashPassword } from '../utils/hasher.js';
import { createJwt } from '../utils/jwt.js';

export async function signup(req, res) {
  const { email, password, fullName } = req.body;
  const existingUser = await userService.findUser({ email });
  if (existingUser) {
    throw new createError.BadRequest('email already exists');
  }

  const hashedPassword = await hashPassword(password);
  const createdUser = await userService.createUser({
    email,
    password: hashedPassword,
    full_name: fullName,
  });

  const token = await createJwt({ id: createdUser.get('id') });
  res.status(StatusCodes.CREATED).send({ user: createdUser, token });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const foundUser = await userService.findUser({ email });

  if (
    foundUser &&
    (await comparePassword(foundUser.get('password'), password))
  ) {
    const token = await createJwt({ id: foundUser.get('id') });
    return res.status(StatusCodes.OK).send({ user: foundUser, token });
  }

  throw new createError.BadRequest("email or password didn't match");
}
