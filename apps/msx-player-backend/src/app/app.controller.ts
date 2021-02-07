import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('api/cat')
  async getCatUrl() {
    return this.appService.getCat();
  }

}
