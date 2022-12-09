import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';

import { getMongoConfig } from './configs/mongo.config';
import { BoardModule } from './board/board.module';
import { ListModule } from './list/list.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    BoardModule,
    ListModule,
    TodosModule,
  ],
})
export class AppModule {}
