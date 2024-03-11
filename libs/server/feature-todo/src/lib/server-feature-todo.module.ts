import { Module } from '@nestjs/common';
import { ServerFeatureTodoController } from './server-feature-todo.controller';
import { ServerFeatureTodoService } from './server-feature-todo.service';
import { ServerDataAccessModule } from '@fst/server/data-access';

@Module({
  imports: [ServerDataAccessModule],
  controllers: [ServerFeatureTodoController],
  providers: [ServerFeatureTodoService],
  exports: [ServerFeatureTodoService],
})
export class ServerFeatureTodoModule {}
