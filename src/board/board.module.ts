import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';

import { BoardController } from './board.controller';
import { BoardModel } from './board.model';
import { BoardService } from './board.service';
import { TodosModule } from './../todos/todos.module';
import { ListModule } from '../list/list.module';

@Module({
  controllers: [BoardController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: BoardModel,
        schemaOptions: {
          collection: 'Board',
        },
      },
    ]),
    TodosModule,
    ListModule,
  ],
  providers: [BoardService],
})
export class BoardModule {}
