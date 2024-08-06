import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InterviewLogger } from './logger/interview-logger';
import { ConfigService } from '@nestjs/config';
import { TransformInterceptor } from './response/interview.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './response/interview.exception.filter';

async function bootstrap() {
  const logger = new InterviewLogger();
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger,
  });
  const configService = app.get(ConfigService);
  const commonConf = configService.get('common');

  const config = new DocumentBuilder()
    .addTag('Interview')
    .setVersion('1.0')
    .setTitle('Interview example')
    .setDescription('The interview API description')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      //   docExpansion: 'none',
      defaultModelsExpandDepth: 0,
    },
  });

  app.setGlobalPrefix('api', {
    // 필요하면 추가
    exclude: [],
  });
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors({
    origin: [
      'http://localhost:5000',
      'http://localhost:8000',
      'http://localhost:8080',
    ],
    credentials: true,
  });

  await app.listen(commonConf.port);

  /* listening log */
  logger.debug(
    `server listening on http://${commonConf.host}:${commonConf.port}`,
  );
}
bootstrap();
