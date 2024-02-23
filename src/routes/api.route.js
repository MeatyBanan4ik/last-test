/**
 * external libs
 */
import { Router } from 'express';

/**
 * internal routes
 */
import TaskRoute from './task.route.js';

const router = Router();

router.use('/tasks', TaskRoute);

export default router;
