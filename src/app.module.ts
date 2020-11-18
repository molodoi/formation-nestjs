import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

// Decorateur de Module
@Module({
  imports: [TodoModule], // Ce que je souhaite importer dans mon module
  exports:[],  // Ce que je souhaite exporter de mon module
  controllers: [AppController], // Ce module utilise ce(s) controller(s)
  providers: [AppService], // Ce module utilise ce(s) service(s) 
})
export class AppModule {}
