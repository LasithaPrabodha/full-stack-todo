import { Module } from '@nestjs/common';
import { ToDoEntitySchema } from './schemas/to-do.entity-schema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ToDoEntitySchema])],
    exports: [TypeOrmModule],
  })
export class DatabaseModule {}
