import { createHmacToken } from '@libs/createHmacToken';
import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { InterviewException } from '@src/response/interview.exception';
import { InterviewResponse } from '@src/response/interview.response';
import { User } from '@src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService,
  ) {}

  async login(email: string, password: string) {
    const secretKey = this.configService.get('common.secretKey');
    const token = createHmacToken(secretKey, email, password);
    const user = await this.userRepository.findOne({
      where: { email, password: token },
    });
    if (!user) throw new InterviewException('SERVER_ERROR', HttpStatus.OK);

    return new InterviewResponse('SUCCESS', HttpStatus.OK);
  }

  checkLogin(token?: string) {}
}
