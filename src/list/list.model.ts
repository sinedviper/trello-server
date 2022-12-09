import { Types } from 'mongoose';
import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ListModel extends Base {}
export class ListModel extends TimeStamps {
  @prop()
  name: string;

  @prop()
  check: boolean;

  @prop()
  todosId: Types.ObjectId;
}
