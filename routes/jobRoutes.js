import express from 'express'

const router = express.Router()

import { createJob,getAllJob,updateJob,showStats,deleteJob } from '../controllers/jobController.js'
import testUser from '../middleware/testUser.js'

router.route('/').get(getAllJob).post(testUser,createJob)
router.route('/showStats').get(showStats)
router.route('/:id').patch(testUser,updateJob).delete(deleteJob)

export default router