import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { User } from '@src/users/entities/user.entity';
import { Interview } from '@src/interview/entities/interview.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Interview, Answer])],
  controllers: [AnswerController],
  providers: [AnswerService],
})
export class AnswerModule {}
