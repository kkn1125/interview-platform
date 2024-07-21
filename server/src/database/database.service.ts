import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { dbOptions } from '@src/config/database.conf';
('typeorm-naming-strategies');

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return dbOptions;
  }
}
