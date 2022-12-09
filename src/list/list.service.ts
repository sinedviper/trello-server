import { Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';

import { CreateListDto } from './dto/create-list.dto';
import { ListModel } from './list.model';

@Injectable()
export class ListService {
  constructor(
    @InjectModel(ListModel)
    private readonly listModel: ModelType<ListModel>,
  ) {}

  async create(dto: CreateListDto) {
    return this.listModel.create(dto);
  }

  async findAll(id: string) {
    return this.listModel.find({ todosId: new Types.ObjectId(id) }).exec();
  }

  async findById(id: string) {
    return this.listModel.findById(id).exec();
  }

  async deleteById(id: string) {
    return this.listModel.findByIdAndDelete(id).exec();
  }

  async deleteMany(id: string) {
    return this.listModel
      .deleteMany({ todosId: new Types.ObjectId(id) })
      .exec();
  }

  async updateById(id: string, dto: CreateListDto) {
    return this.listModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }
}
