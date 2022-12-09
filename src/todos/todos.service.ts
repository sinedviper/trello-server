import { Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';

import { CreateTodosDto } from './dto/create-todos.dto';
import { TodosModel } from './todos.model';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(TodosModel)
    private readonly todosModel: ModelType<TodosModel>,
  ) {}

  async create(dto: CreateTodosDto) {
    return this.todosModel.create(dto);
  }

  async findAll(id: string) {
    return this.todosModel.find({ boardId: new Types.ObjectId(id) }).exec();
  }

  async deleteById(id: string) {
    return this.todosModel.findByIdAndDelete(id).exec();
  }

  async deleteAll(id: string) {
    return this.todosModel
      .deleteMany({ boardId: new Types.ObjectId(id) })
      .exec();
  }
}
