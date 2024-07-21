import {
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_SCHEMA_NAME,
  DB_USER,
} from '@common/variables';
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const dbOptions = {
  type: 'mysql' /* 'mariadb' */,
  host: DB_HOST,
  port: +(DB_PORT || 3306),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_SCHEMA_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  timezone: '+09:00',
  namingStrategy: new SnakeNamingStrategy(),
  migrations: [__dirname + '/../**/migrations/*.ts'],
  migrationsRun: true,
  migrationsTableName: 'migrations',
  logging: true,
  dropSchema: true,
} as TypeOrmModuleOptions;

export default registerAs('database', (): TypeOrmModuleOptions => dbOptions);
