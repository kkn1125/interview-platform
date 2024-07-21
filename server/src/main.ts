import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InterviewLogger } from './logger/interview-logger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new InterviewLogger();
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger,
  });
  const configService = app.get(ConfigService);
  app.setGlobalPrefix('api', {
    // 필요하면 추가
    exclude: [],
  });
  configService.get('common');

  logger.debug('server listening on http://localhost:8000');
  await app.listen(3000);
}
bootstrap();
