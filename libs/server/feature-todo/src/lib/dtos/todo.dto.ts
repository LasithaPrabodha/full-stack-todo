import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ICreateTodo, ITodo, IUpdateTodo, IUpsertTodo } from '@fst/shared/domain';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */

export class TodoDto implements ITodo {
  @ApiProperty({
    type: String,
    example: `Create a new blog post`,
    readOnly: true,
  })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({
    type: String,
    example: `The Full Stack Engineer blog needs a new post!`,
    readOnly: true,
  })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({
    type: String,
    readOnly: true,
    example: 'DCA76BCC-F6CD-4211-A9F5-CD4E24381EC8',
  })
  @IsString()
  @IsNotEmpty()
  id!: string;

  @ApiProperty({
    type: Boolean,
    readOnly: true,
    default: false,
  })
  @IsBoolean()
  @IsNotEmpty()
  completed!: boolean;
}
export class CreateTodoDto  implements ICreateTodo {
  @ApiProperty({
    type: String,
    example: `Create a new blog post`,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({
    type: String,
    example: `The Full Stack Engineer blog needs a new post!`,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description!: string;
}


export class UpsertTodoDto implements IUpsertTodo {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  id!: string;

  @IsBoolean()
  @IsNotEmpty()
  completed!: boolean;
}

export class UpdateTodoDto implements IUpdateTodo {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}