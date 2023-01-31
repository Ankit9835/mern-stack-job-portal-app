import express from 'express'
import authenticateUser from '../middleware/auth.js'
import rateLimiter from 'express-rate-limit';

const app = express()
const router = express.Router()

import { registeruser,loginUser,updateUser,getCurrentUser,logout } from '../controllers/authController.js'
import testUser from '../middleware/testUser.js';

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,
    message: 'Too many requests from this IP, please try again after 15 minutes',
  });

router.route('/register').post(apiLimiter,registeruser)
router.route('/login').post(apiLimiter,loginUser)
router.route('/updateUser').patch(authenticateUser,testUser,updateUser)
router.route('/getCurrentUser').get(authenticateUser, getCurrentUser);
router.get('/logout', logout);

export default router