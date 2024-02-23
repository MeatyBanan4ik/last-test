/**
 * external libs
 */
import { Router } from 'express';

/**
 * internal middlewares
 */
import CallHttpHandler from '../handlers/http/middlewares/call.http.middleware.js';

/**
 * internal http handlers
 */
import TaskHttpHandler from '../handlers/http/task.http.handler.js';

const router = Router();

router.get('/', CallHttpHandler(TaskHttpHandler, 'list'));

export default router;
