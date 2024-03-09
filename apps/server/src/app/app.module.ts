import { Module } from '@nestjs/common';
import { ServerFeatureTodoModule } from '@fst/server/feature-todo';

@Module({
  imports: [ServerFeatureTodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
