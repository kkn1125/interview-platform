import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InterviewException } from '@src/response/interview.exception';

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
    const qr = this.questionRepository.manager.connection.createQueryRunner();
    await qr.startTransaction();

    console.log(createQuestionDto);
    let created;
    try {
      created = await this.questionRepository.save(createQuestionDto, {
        transaction: true,
        reload: true,
      });
      await qr.commitTransaction();
    } catch (error) {
      await qr.rollbackTransaction();
      throw new InterviewException(
        'SERVER_ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } finally {
      await qr.release();
    }
    return created;
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
