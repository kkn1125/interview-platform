import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InterviewLogger } from './logger/interview-logger';
import { ConfigService } from '@nestjs/config';
import { TransformInterceptor } from './interceptors/interview.interceptor';

async function bootstrap() {
  const logger = new InterviewLogger();
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger,
  });
  const configService = app.get(ConfigService);
  const commonConf = configService.get('common');

  app.setGlobalPrefix('api', {
    // 필요하면 추가
    exclude: [],
  });
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(commonConf.port);

  /* listening log */
  logger.debug(
    `server listening on http://${commonConf.host}:${commonConf.port}`,
  );
}
bootstrap();
