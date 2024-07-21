import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@src/users/entities/user.entity';
import { Session } from './entities/session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Session, User])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
