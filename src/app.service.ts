import { Injectable } from '@nestjs/common';
import { IAppProps } from './interfaces';

@Injectable()
export class AppService {
  getHello(): IAppProps {
    return {
      message: 'Hello from Rate Everything API',
      title: 'Rate Everything - API',
    };
  }
}
