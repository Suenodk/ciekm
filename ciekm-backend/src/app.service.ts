import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  readonly names = ['Maliha', 'Cyrus', 'Maddie', 'Spencer'];

  getHello(): string {
    return this.names[Math.floor(Math.random() * this.names.length)];
  }
}
