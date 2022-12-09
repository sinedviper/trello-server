import { IsString, IsBoolean } from 'class-validator';

export class CreateListDto {
  @IsString()
  name: string;

  @IsBoolean()
  check: boolean;

  @IsString()
  todosId: string;
}
