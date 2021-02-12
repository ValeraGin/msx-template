import { Controller, Get, Param, Query } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('api/get-photos')
  async getCatUrl(@Query('query') query) {
    return this.appService.getPhotos(query);
  }

}
