import { Module } from '@nestjs/common';

import { MsxController } from './msx.controller';

@Module({
  imports: [],
  controllers: [MsxController],
})
export class MsxModule {}
