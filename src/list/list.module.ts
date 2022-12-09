import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';

import { ListModel } from './list.model';
import { ListService } from './list.service';
import { ListController } from './list.controller';

@Module({
  controllers: [ListController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ListModel,
        schemaOptions: {
          collection: 'List',
        },
      },
    ]),
  ],
  providers: [ListService],
  exports: [ListService],
})
export class ListModule {}
