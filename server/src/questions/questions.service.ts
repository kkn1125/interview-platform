import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  findAll() {
    return this.questionRepository.find();
  }

  findOne(id: number) {
    return this.questionRepository.findOne({ where: { id } });
  }

  async create(createQuestionDto: CreateQuestionDto) {
    await this.questionRepository.manager.transaction(async (manager) => {
      await this.questionRepository.save(createQuestionDto, {
        transaction: true,
      });
    });
    return {};
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    await this.questionRepository.manager.transaction(async (manger) => {
      await this.questionRepository.update(id, updateQuestionDto);
    });
    return {};
  }

  remove(id: number) {
    this.questionRepository.softDelete({ id });
  }
}
