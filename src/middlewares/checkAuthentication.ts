import { config } from '../config';
import { NextFunction, Request, Response } from 'express';
const OktaJwtVerifier = require('@okta/jwt-verifier');

const { ISSUER, CLIENT_ID } = config;

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: ISSUER,
  clientId: CLIENT_ID,
});

export default (req: any, res: Response, next: NextFunction) => {
  const accessToken: string = req.headers.authorization || '';

  return (
    oktaJwtVerifier
    .verifyAccessToken(accessToken)
    .then((jwt: any) => {
      console.log(jwt);
      req.jwt = jwt;
      next();
    })
    .catch((err: Error) => {
      next({
        error: 'Unauthorized Access',
        message: err.message,
        status: 401,
      });
    })
  );
}