import { config } from './config';
import Server from './Server';

const initServer = () => {
  const server: Server = new Server(config);
  server.bootstrap().run();
};

initServer();