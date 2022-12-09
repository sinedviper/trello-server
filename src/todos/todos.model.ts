import { Types } from 'mongoose';
import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TodosModel extends Base {}
export class TodosModel extends TimeStamps {
  @prop()
  name: string;

  @prop()
  boardId: Types.ObjectId;
}
