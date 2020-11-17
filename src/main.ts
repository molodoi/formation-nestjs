import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Une méthode bootstrap 
async function bootstrap() {
  // Crée une application Nest en utilisant le NestFactory (Fabique d'application Nest) à partir du module AppModule
  const app = await NestFactory.create(AppModule);
  // On lui dit d'écouter sur le port 3000 => http://localhost:3000
  await app.listen(3000);
}
// Et on éxécute cette méthode bootstrap
bootstrap();
