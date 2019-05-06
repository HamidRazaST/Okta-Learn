import { Router } from 'express';
import userController from './Controller';

const router = Router();

router
  .get('/all', userController.getAllUsers);

export default router;