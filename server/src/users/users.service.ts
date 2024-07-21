import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InterviewResponse } from '@src/response/interview-response';
import { InterviewException } from '@src/response/interview.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const found = await this.userRepository.findOne({ where: { id } });
    if (!found) {
      throw new InterviewException(
        'SERVER_ERROR',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async create(createUserDto: CreateUserDto) {
    await this.userRepository.manager.transaction(async (manager) => {
      await this.userRepository.save(createUserDto, { transaction: true });
    });
    return {};
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
