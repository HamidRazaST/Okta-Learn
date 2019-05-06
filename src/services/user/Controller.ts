import { NextFunction, Request, Response } from 'express';
import { users, successHandler } from '../../libs';

class UserController {
  public getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).send(successHandler(users, 'Success', 200));
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();