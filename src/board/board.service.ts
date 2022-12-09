import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';

import { CreateBoardDto } from './dto/create-board.dto';
import { BoardModel } from './board.model';

@Injectable()
export class BoardService {
  constructor(
    @InjectModel(BoardModel) private readonly boardModel: ModelType<BoardModel>,
  ) {}

  async create(dto: CreateBoardDto): Promise<DocumentType<BoardModel>> {
    return this.boardModel.create(dto);
  }

  async findAll() {
    return this.boardModel.find({}).exec();
  }

  async findById(id: string) {
    return this.boardModel.findById(id).exec();
  }

  async deleteById(id: string) {
    return this.boardModel.findByIdAndDelete(id).exec();
  }
}
