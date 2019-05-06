import { NextFunction, Request, Response } from 'express';

export default (data: any, message: string, status: number) => ({
  data,
  message: message || 'Success',
  status: status || 200,
  success: 'OK',
});