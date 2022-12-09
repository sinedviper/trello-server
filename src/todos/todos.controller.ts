import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

import { TodosService } from './todos.service';
import { REVIEW_NOT_FOUND } from './todos.constants';
import { CreateTodosDto } from './dto/create-todos.dto';
import { IdValidationPipe } from '../pipes/ad-validation.pipe';
import { ListService } from './../list/list.service';

@Controller('todos')
export class TodosController {
  constructor(
    private readonly todosService: TodosService,
    private readonly listservice: ListService,
  ) {}

  @Post('create')
  async create(@Body() dto: CreateTodosDto) {
    return this.todosService.create(dto);
  }

  @Get('findAll/:id')
  async findAll(@Param('id', IdValidationPipe) id: string) {
    const todos = await this.todosService.findAll(id);
    if (!todos) {
      throw new NotFoundException(REVIEW_NOT_FOUND);
    }
    return todos;
  }

  @Delete(':id')
  async delete(@Param('id', IdValidationPipe) id: string) {
    const deleteTodos = await this.todosService.deleteById(id);
    if (!deleteTodos) {
      throw new NotFoundException(REVIEW_NOT_FOUND);
    }
    await this.listservice.deleteMany(id);
  }
}
