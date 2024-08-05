import { CategoryType } from '@common/enums/category.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty({ name: 'user_id', example: 1 })
  userId!: number;

  @ApiProperty({
    name: 'category_type',
    type: 'enum',
    enum: CategoryType,
    default: CategoryType.Personal,
  })
  categoryType!: CategoryType;

  @ApiProperty({ type: 'text', nullable: true })
  contents!: string;
}
