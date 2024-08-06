import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InterviewResponse } from '@src/response/interview-response';
import { InterviewException } from '@src/response/interview.exception';
import { createHmacToken } from '@libs/createHmacToken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService,
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
    const qr = this.userRepository.manager.connection.createQueryRunner();

    await qr.startTransaction();

    try {
      const secretKey = this.configService.get('common.secretKey');
      const passwordToken = createHmacToken(
        secretKey,
        createUserDto.email,
        createUserDto.password,
      );
      const newDto = {
        ...createUserDto,
        password: passwordToken,
      };
      const saved = await this.userRepository.save(newDto, {
        transaction: true,
        reload: true,
      });
      await qr.commitTransaction();
      return saved;
    } catch (error) {
      await qr.rollbackTransaction();
      throw error;
    } finally {
      await qr.release();
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
