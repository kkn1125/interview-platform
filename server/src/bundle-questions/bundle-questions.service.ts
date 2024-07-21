import { Injectable } from '@nestjs/common';
import { CreateBundleQuestionDto } from './dto/create-bundle-question.dto';
import { UpdateBundleQuestionDto } from './dto/update-bundle-question.dto';

@Injectable()
export class BundleQuestionsService {
  create(createBundleQuestionDto: CreateBundleQuestionDto) {
    return 'This action adds a new bundleQuestion';
  }

  findAll() {
    return `This action returns all bundleQuestions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bundleQuestion`;
  }

  update(id: number, updateBundleQuestionDto: UpdateBundleQuestionDto) {
    return `This action updates a #${id} bundleQuestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} bundleQuestion`;
  }
}
