import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BundleQuestionsService } from './bundle-questions.service';
import { CreateBundleQuestionDto } from './dto/create-bundle-question.dto';
import { UpdateBundleQuestionDto } from './dto/update-bundle-question.dto';

@Controller('bundle-questions')
export class BundleQuestionsController {
  constructor(
    private readonly bundleQuestionsService: BundleQuestionsService,
  ) {}

  @Post()
  create(@Body() createBundleQuestionDto: CreateBundleQuestionDto) {
    return this.bundleQuestionsService.create(createBundleQuestionDto);
  }

  @Get()
  findAll() {
    return this.bundleQuestionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bundleQuestionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBundleQuestionDto: UpdateBundleQuestionDto,
  ) {
    return this.bundleQuestionsService.update(+id, updateBundleQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bundleQuestionsService.remove(+id);
  }
}
