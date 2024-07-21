import { Module } from '@nestjs/common';
import { BundlesService } from './bundles.service';
import { BundlesController } from './bundles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bundle } from './entities/bundle.entity';
import { Question } from '@src/questions/entities/question.entity';
import { User } from '@src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Question, Bundle])],
  controllers: [BundlesController],
  providers: [BundlesService],
})
export class BundlesModule {}
