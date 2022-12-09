import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

import { BoardService } from './board.service';
import { REVIEW_NOT_FOUND } from './board.constants';
import { CreateBoardDto } from './dto/create-board.dto';
import { IdValidationPipe } from '../pipes/ad-validation.pipe';
import { TodosService } from './../todos/todos.service';
import { ListService } from 'src/list/list.service';

@Controller('board')
export class BoardController {
  constructor(
    private readonly boardService: BoardService,
    private readonly todosService: TodosService,
    private readonly listService: ListService,
  ) {}

  @Post('create')
  async create(@Body() dto: CreateBoardDto) {
    return this.boardService.create(dto);
  }

  @Get('findAll')
  async findAll() {
    const board = await this.boardService.findAll();
    if (!board) {
      throw new NotFoundException(REVIEW_NOT_FOUND);
    }
    return board;
  }

  @Get(':id')
  async get(@Param('id', IdValidationPipe) id: string) {
    const board = await this.boardService.findById(id);
    if (!board) {
      throw new NotFoundException(REVIEW_NOT_FOUND);
    }
    return board;
  }

  @Delete(':id')
  async delete(@Param('id', IdValidationPipe) id: string) {
    const deleteBoard = await this.boardService.deleteById(id);
    const listTodos = await this.todosService.findAll(id);
    await this.todosService.deleteAll(id);
    for (const list of listTodos) {
      await this.listService.deleteMany(String(list._id));
    }

    if (!deleteBoard) {
      throw new NotFoundException(REVIEW_NOT_FOUND);
    }
  }
}
