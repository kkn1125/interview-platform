import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: true, type: 'string', example: 'devkimson' })
  @IsString()
  nickname!: string;

  @ApiProperty({ required: true, type: 'string', example: '1234' })
  @IsString()
  password!: string;

  @ApiProperty({
    required: true,
    type: 'string',
    example: 'chaplet01@gmail.com',
  })
  @IsString()
  email!: string;
}
