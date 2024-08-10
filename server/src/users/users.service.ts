import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InterviewResponse } from '@src/response/interview.response';
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

  async findAll() {
    const list = await this.userRepository.find();
    return new InterviewResponse('SUCCESS', HttpStatus.OK, { data: list });
  }

  async findOne(id: number) {
    const found = await this.userRepository.findOne({ where: { id } });
    if (!found) {
      throw new InterviewException(
        'USER_ERROR',
        HttpStatus.NOT_FOUND,
        'NOT_FOUND_ERROR',
      );
    }
    return new InterviewResponse('SUCCESS', HttpStatus.OK, { data: found });
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
      return new InterviewResponse('SUCCESS', HttpStatus.OK, { data: saved });
    } catch (error) {
      await qr.rollbackTransaction();
      throw error;
    } finally {
      await qr.release();
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updated = await this.userRepository.update({ id }, updateUserDto);
    return new InterviewResponse('SUCCESS', HttpStatus.OK, { data: updated });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
