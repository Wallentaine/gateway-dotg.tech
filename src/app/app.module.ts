import { Module } from '@nestjs/common';

import { ConfigModule } from '@libs/config';
import { LoggerModule } from 'nestjs-pino';
import { pinoDefaultConfig } from '@libs/logger';

@Module({
  imports: [ConfigModule, LoggerModule.forRootAsync(pinoDefaultConfig)],
})
export class AppModule {}
