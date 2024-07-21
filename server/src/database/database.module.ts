import { MODE } from '@common/variables';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConf from '@src/config/database.conf';
import { DatabaseService } from './database.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', `.env.${MODE}`],
      load: [databaseConf],
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
    }),
  ],
})
export class DatabaseModule {}
