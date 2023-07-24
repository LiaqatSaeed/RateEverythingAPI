import { Injectable } from '@nestjs/common';
import { IAppProps } from './interfaces';

@Injectable()
export class AppService {
  getHello(): IAppProps {
    return {
      message: 'Hello from Rate Everything API',
      title: 'Rate Everything - API',
      author: 'Liaqat Saeed',
      username: 'liaqatsaeed6777',
      website: 'https://liaqatsaeed6777.com/',
      email: 'email@liaqatsaeed007@gmail.com',
      socials: {
        twitter: 'https://twitter.com/',
        youtube: 'https://www.youtube.com/@',
        instagram: 'https://www.instagram.com/',
      }
    };
  }
}
