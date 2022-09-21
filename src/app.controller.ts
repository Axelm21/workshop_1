import { Body, Controller, Get, HostParam, Post } from '@nestjs/common';
import { AppService, ArticleDto } from './app.service';

@Controller()
export class AppController {
  @Get()
  sayHello(): string {
    return 'Hello Nest';
  }
  @Get('/:title')
  getArticle(@Param('title') title: string):Promise<ArticleDto> {
    return this.appService.createArticle(title);
  }

  @Post()
  async postArticle(@Body()) article: ArticleDto) : Promise<void>
  await this.appService.createArticle(article);
}