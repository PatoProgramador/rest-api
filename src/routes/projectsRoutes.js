import {Router} from 'express'
import { getProjects, createProject, upadateProject, deleteProject, getProject, getProjectTasks } from '../controllers/projectsController.js';

const router = Router();

router.get('/projects', getProjects);
router.post('/projects', createProject);
router.put('/projects/:id', upadateProject);
router.delete('/projects/:id', deleteProject);
router.get('/projects/:id', getProject);

router.get('/projects/:id/tasks', getProjectTasks);

export default router;