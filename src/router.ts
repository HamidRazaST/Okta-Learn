import { Router } from 'express';
import { checkAuthentication } from './middlewares';
import { userRouter } from './services';

const router = Router();

router
  .use('/user', checkAuthentication, userRouter);

export default router;