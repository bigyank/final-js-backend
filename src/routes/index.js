import express from 'express';

import authRoute from './auth.route.js';
import userRoute from './user.route.js';
import postRoute from './post.route.js';

import { verifyJWT } from '../utils/jwt.js';

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', verifyJWT, userRoute);
router.use('/posts', verifyJWT, postRoute);

export default router;
