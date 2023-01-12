import { Router } from "express";
import { getTasks, createTask } from "../controllers/tasksControllers.js";

const router = Router();

router.get('/tasks',getTasks)
router.post('/tasks',createTask)
router.put('/tasks/:id')
router.delete('/tasks/:id')
router.get('/tasks/:id')

export default router;