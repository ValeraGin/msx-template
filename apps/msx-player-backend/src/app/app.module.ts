import { Module } from '@nestjs/common';

import { MsxModule } from './msx/msx.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [MsxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
