import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';

import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { ListModule } from './../list/list.module';
import { TodosModel } from './todos.model';

@Module({
  controllers: [TodosController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: TodosModel,
        schemaOptions: {
          collection: 'Todos',
        },
      },
    ]),
    ListModule,
  ],
  providers: [TodosService],
  exports: [TodosService],
})
export class TodosModule {}
