import { Module } from '@nestjs/common';
import { BundleQuestionsModule } from './bundle-questions/bundle-questions.module';
import { DatabaseModule } from './database/database.module';
import { QuestionsModule } from './questions/questions.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    QuestionsModule,
    BundleQuestionsModule,
    DatabaseModule,
  ],
  controllers: [],
})
export class AppModule {}
