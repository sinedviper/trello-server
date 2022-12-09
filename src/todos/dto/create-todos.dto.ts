import { IsString } from 'class-validator';

export class CreateTodosDto {
  @IsString()
  name: string;

  @IsString()
  boardId: string;
}
