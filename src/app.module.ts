import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Decorateur de Module
@Module({
  imports: [],
  controllers: [AppController], // Ce module utilise ce(s) controller(s)
  providers: [AppService], // Ce module utilise ce(s) service(s) 
})
export class AppModule {}
