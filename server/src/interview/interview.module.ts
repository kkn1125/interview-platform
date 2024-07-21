import { Module } from '@nestjs/common';
import { InterviewService } from './interview.service';
import { InterviewController } from './interview.controller';
import { Interview } from './entities/interview.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from '@src/answer/entities/answer.entity';
import { User } from '@src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Answer, Interview])],
  controllers: [InterviewController],
  providers: [InterviewService],
})
export class InterviewModule {}
