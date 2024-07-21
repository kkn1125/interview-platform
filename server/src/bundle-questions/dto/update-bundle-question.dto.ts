import { PartialType } from '@nestjs/mapped-types';
import { CreateBundleQuestionDto } from './create-bundle-question.dto';

export class UpdateBundleQuestionDto extends PartialType(
  CreateBundleQuestionDto,
) {}
