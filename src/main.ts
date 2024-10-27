import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigSchema } from '@libs/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFile } from 'fs/promises';
import { Logger as PinoLogger } from 'nestjs-pino';

import { version } from '../package.json';

async function bootstrap() {  
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      logger:
        process.env.NODE_ENV === 'production'
          ? ['error', 'warn', 'log']
          : ['error', 'warn', 'log', 'debug'],
      bufferLogs: true,
    },
  );

  app.useLogger(app.get(PinoLogger));

  const logger = new Logger('Bootstrap');

  const config = app.get(ConfigSchema);

  app.setGlobalPrefix(config.globalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Dotg Gayway')
    .setDescription(`API specification for ${config.name}`)
    .setVersion(version)
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs', app, swaggerDocument);
  app.enableCors({
    origin: '*',
  });
  await app.listen({
    port: config.port,
    host: '0.0.0.0',
  });

  logger.log(`${config.name} ${version} is ready on port ${config.port}`);
  await writeFile('openapi.json', JSON.stringify(swaggerDocument));
}

bootstrap();
