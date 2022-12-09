import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ListService } from './list.service';
import { REVIEW_NOT_FOUND } from './list.constants';
import { CreateListDto } from './dto/create-list.dto';
import { IdValidationPipe } from '../pipes/ad-validation.pipe';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post('create')
  async create(@Body() dto: CreateListDto) {
    return this.listService.create(dto);
  }

  @Get(':id')
  async get(@Param('id', IdValidationPipe) id: string) {
    const list = await this.listService.findById(id);
    if (!list) {
      throw new NotFoundException(REVIEW_NOT_FOUND);
    }
    return list;
  }

  @Get('findAll/:id')
  async findAll(@Param('id', IdValidationPipe) id: string) {
    const list = await this.listService.findAll(id);
    if (!list) {
      throw new NotFoundException(REVIEW_NOT_FOUND);
    }
    return list;
  }

  @Delete(':id')
  async delete(@Param('id', IdValidationPipe) id: string) {
    const deleteList = await this.listService.deleteById(id);
    if (!deleteList) {
      throw new NotFoundException(REVIEW_NOT_FOUND);
    }
  }

  @Delete('deleteAll/:id')
  async deleteMany(@Param('id', IdValidationPipe) id: string) {
    const deleteList = await this.listService.deleteMany(id);
    if (!deleteList) {
      throw new NotFoundException(REVIEW_NOT_FOUND);
    }
  }

  @Patch(':id')
  async patch(
    @Param('id', IdValidationPipe) id: string,
    @Body() dto: CreateListDto,
  ) {
    const updateList = await this.listService.updateById(id, dto);
    if (!updateList) {
      throw new NotFoundException(REVIEW_NOT_FOUND);
    }
    return updateList;
  }
}
