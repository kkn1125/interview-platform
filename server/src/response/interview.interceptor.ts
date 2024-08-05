import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response as ExpressResponse } from 'express';
import { InterviewLogger } from '@src/logger/interview-logger';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  private readonly interviewLogger: InterviewLogger = new InterviewLogger();

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const http = context.switchToHttp();
    const response = http.getResponse() as ExpressResponse;

    return next.handle().pipe(
      map((data) => {
        const status = data?.status || HttpStatus.OK;
        response.status(status);
        this.interviewLogger.log(
          `Response <== (${status})`,
          data?.toString() || 'contents',
        );
        // this.kalisLogger.log('✨ data', data);
        // this.kalisLogger.log('🪵 check status', data?.status);
        return data;
      }),
    );
  }
}
