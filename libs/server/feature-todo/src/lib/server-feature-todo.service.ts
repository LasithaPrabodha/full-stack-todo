import { Injectable, NotFoundException } from '@nestjs/common';
import { ITodo } from '@fst/shared/domain';
import { BehaviorSubject } from 'rxjs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDoEntitySchema } from '@fst/server/data-access';

@Injectable()
export class ServerFeatureTodoService {
  private todos$$ = new BehaviorSubject<ITodo[]>([
    {
      id: 'something-something-dark-side',
      title: 'Add a route to create todo items!',
      description: 'Yes, this is foreshadowing a POST route introduction',
      completed: false,
    },
  ]);

  constructor(
    @InjectRepository(ToDoEntitySchema)
    private todoRepository: Repository<ITodo>
  ) {}

  async getAll(): Promise<ITodo[]> {
    return await this.todoRepository.find();
  }

  async getOne(id: string): Promise<ITodo> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`Todo could not be found!`);
    }

    return todo;
  }

  async create(todo: Pick<ITodo, 'title' | 'description'>): Promise<ITodo> {
    const newTodo = await this.todoRepository.save({ ...todo });
    return newTodo;
  }
  async upsert(data: ITodo): Promise<ITodo> {
    await this.todoRepository.save({
      ...data,
    });

    // re-query the database so that the updated record is returned
    const updated = await this.todoRepository.findOneOrFail({
      where: { id: data.id },
    });
    return updated;
  }

  async update(id: string, data: Partial<Omit<ITodo, 'id'>>): Promise<ITodo> {
    await this.todoRepository.save({
      id,
      ...data,
    });

    // re-query the database so that the updated record is returned
    const updated = await this.todoRepository.findOneOrFail({ where: { id } });
    return updated;
  }

  async delete(id: string): Promise<void> {
    await this.todoRepository.delete({ id });
    return;
  }
}
