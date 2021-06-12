import express from 'express';
import { getProfileInfo } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/profile').get(getProfileInfo);

export default router;
