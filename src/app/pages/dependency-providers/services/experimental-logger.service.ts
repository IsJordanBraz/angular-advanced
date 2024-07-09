import { Injectable } from '@angular/core';
import { Logger } from '../interface/logger';

@Injectable()
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';

  constructor() {}

  log(message: string): void {
    console.log(`ExperimentalLoggerService: ${message}`);
  }
}
