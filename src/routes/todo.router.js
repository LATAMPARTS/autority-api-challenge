import { Router } from 'express';

import * as todoController from '@/controllers/todo.controller';

const router = Router();

router.get('/tasks', todoController.getAll);
router.post('/task', todoController.createOne);
router.get('/task/:id', todoController.getOne);
router.put('/task/:id', todoController.updateOne);
router.delete('/task/:id', todoController.deleteOne);

export default router;
