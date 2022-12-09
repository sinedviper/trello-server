import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BoardModel extends Base {}
export class BoardModel extends TimeStamps {
  @prop()
  name: string;
}
