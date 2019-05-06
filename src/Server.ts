import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as bodyParser from 'body-parser';

import { IConfig } from './config';
import { successHandler, notFoundRoute, errorHandler } from './libs';
import router from './router';
import { checkAuthentication } from './middlewares';

class Server {
  public app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }

  public bootstrap() {
    this.initCookieParser();
    this.initCors();
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  public run() {
    try {
      const {
        app,
        config: {
          PORT,
        },
      } = this;

      app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }

  private setupRoutes() {
    try {
      const { app } = this;

      app.get('/health-check', checkAuthentication, (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const data = [{'Health Status': 'I am OK'}];
        res.status(200).send(successHandler(data, 'Success', 200));
      });

      app.get('/login', (req: any, res: any) => {
        res.send('hi login');
      });

      app.use('/api', router);
      app.use(notFoundRoute);
      app.use(errorHandler);
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }

  private initCookieParser() {
    this.app.use(cookieParser());
  }

  private initCors() {
    this.app.use(cors());
  }

  private initBodyParser() {
    try {
      const { app } = this;
      app.use(bodyParser.json());
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }
}

export default Server;
