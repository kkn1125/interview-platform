import { Injectable, NestMiddleware } from '@nestjs/common';
import { InterviewLogger } from '@src/logger/interview-logger';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new InterviewLogger('middleware');
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.debug(`[${req.method}] ---> ${req.originalUrl}`);
    next();
  }
}
