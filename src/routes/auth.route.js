import express from 'express';
import { celebrate } from 'celebrate';

import { signup, login } from '../controllers/auth.controller.js';

import {
  loginFormValidator,
  signupFormValidator,
} from '../validators/auth.validator.js';

const router = express.Router();

router.route('/signup').post(celebrate(signupFormValidator), signup);
router.route('/login').post(celebrate(loginFormValidator), login);

export default router;
