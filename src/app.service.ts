import { Injectable } from '@nestjs/common';

// Decorateur Injectable, un service est un Injectable!
@Injectable()
export class AppService {
  getHello(): string {
    // Retournes Hello World
    return 'Hello Nest!';
  }
}
