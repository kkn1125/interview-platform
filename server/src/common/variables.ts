import * as dotenv from 'dotenv';
import * as path from 'path';

/* server run mode */
export const MODE = process.env.NODE_ENV || 'production';

dotenv.config({
  path: path.join(path.resolve(), '.env'),
});
dotenv.config({
  path: path.join(path.resolve(), `.env.${MODE}`),
});

/* server conf */
export const HOST = process.env.HOST;
export const PORT = process.env.PORT;

/* database conf */
export const DB_SCHEMA_NAME = process.env.DB_SCHEMA_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
