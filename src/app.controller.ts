import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Decorateur Controller
@Controller()
export class AppController {
  // Dans le construct on récupère le appService
  constructor(private readonly appService: AppService) {}

  // A cette url qui correspond à la racine éxécutes getHello()
  @Get()
  getHello(): string {
    // retourne le contenu de la methode getHello du appService
    return this.appService.getHello();
  }
}
