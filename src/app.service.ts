import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

export class ArticleDto {
	title: string;
	body: string;
	author: string;
}