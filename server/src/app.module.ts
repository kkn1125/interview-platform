import commonConf from '@config/common.conf';
import databaseConf from '@config/database.conf';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AnswerModule } from './answer/answer.module';
import { AuthModule } from './auth/auth.module';
import { BundlesModule } from './bundles/bundles.module';
import { DatabaseModule } from './database/database.module';
import { InterviewModule } from './interview/interview.module';
import { QuestionsModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
