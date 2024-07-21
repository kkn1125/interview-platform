import commonConf from '@config/common.conf';
import databaseConf from '@config/database.conf';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AnswerModule } from './answer/answer.module';
import { AuthModule } from './auth/auth.module';
import { BundlesModule } from './bundles/bundles.module';
import { DatabaseModule } from './database/database.module';
import { InterviewModule } from './interview/interview.module';
import { QuestionsModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [commonConf, databaseConf],
    }),
    UsersModule,
    QuestionsModule,
    DatabaseModule,
    BundlesModule,
    AuthModule,
    AnswerModule,
    InterviewModule,
  ],
  controllers: [],
})
export class AppModule {}
