import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Protocol } from '@src/common/protocol';
import { Response } from 'express';
import { InterviewException } from './interview.exception';
import { InterviewResponse } from './interview-response';
import { insteadNilOf } from '@libs/insteadNilOf';
import { isNil } from '@libs/isNil';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: InterviewException<keyof Protocol>, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const errorStatusCode = exception?.getStatus?.();
    const isServerError = isNil(errorStatusCode);
    const statusCode = insteadNilOf(errorStatusCode, 500);
    if (isServerError) {
      console.log('Server Error:', exception);
      response
        .status(statusCode)
        .json(new InterviewResponse(statusCode, 'SERVER_ERROR'));
      return;
    }
    response
      .status(statusCode)
      .json(
        new InterviewResponse(
          statusCode,
          exception.message as keyof Protocol,
          exception.cause,
        ),
      );
  }
}
