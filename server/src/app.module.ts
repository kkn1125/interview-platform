import { Module } from '@nestjs/common';
import { BundleQuestionsModule } from './bundle-questions/bundle-questions.module';
import { DatabaseModule } from './database/database.module';
import { QuestionsModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import commonConf from '@config/common.conf';
import databaseConf from '@config/database.conf';

@Module({
  imports: [
    UsersModule,
    QuestionsModule,
    BundleQuestionsModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [commonConf, databaseConf],
    }),
  ],
  controllers: [],
})
export class AppModule {}
