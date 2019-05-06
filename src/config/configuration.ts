import { config } from 'dotenv';
import IConfig from './IConfig';

config();
const envVars: NodeJS.ProcessEnv = process.env;

const configuration: IConfig = Object.freeze({
  PORT: envVars.PORT || '9000',
  ISSUER: envVars.ISSUER || '',
  CLIENT_ID: envVars.CLIENT_ID || '',
});

export default configuration;
