import { Module } from '@nestjs/common';
import { BundleQuestionsService } from './bundle-questions.service';
import { BundleQuestionsController } from './bundle-questions.controller';

@Module({
  controllers: [BundleQuestionsController],
  providers: [BundleQuestionsService],
})
export class BundleQuestionsModule {}
