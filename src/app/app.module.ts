import { Module } from '@nestjs/common';

import { ConfigModule } from '@libs/config';
import { LoggerModule } from 'nestjs-pino';
import { pinoDefaultConfig } from '@libs/logger';
import { BookingModule } from '@modules/booking';

@Module({
  imports: [
    ConfigModule,
    LoggerModule.forRootAsync(pinoDefaultConfig),
    BookingModule,
  ],
})
export class AppModule {}
