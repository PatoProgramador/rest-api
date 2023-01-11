import {Router} from 'express'
import { getProjects, createProject, upadateProject, deleteProject, getProject } from '../controllers/projectsController.js';

const router = Router();

router.get('/projects', getProjects);
router.post('/projects', createProject);
router.put('/projects/:id', upadateProject);
router.delete('/projects/:id', deleteProject);
router.get('/projects/:id', getProject);

export default router;