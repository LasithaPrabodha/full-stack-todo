import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ServerFeatureTodoService } from './server-feature-todo.service';
import { ITodo } from '@fst/shared/domain';
import { CreateTodoDto } from './dtos/todo.dto';

@Controller('todos')
export class ServerFeatureTodoController {
  constructor(private serverFeatureTodoService: ServerFeatureTodoService) {}

  @Get('')
  getAll(): ITodo[] {
    return this.serverFeatureTodoService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): ITodo {
    return this.serverFeatureTodoService.getOne(id);
  }

  @Post('')
  create(@Body() data: CreateTodoDto): ITodo {
    return this.serverFeatureTodoService.create(data);
  }
}
