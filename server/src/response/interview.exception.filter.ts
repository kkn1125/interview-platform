import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
// import { insteadNilOf, isNil } from '@src/common/features';
import { Details, Protocol } from '@src/protocol/protocol';
import { Response } from 'express';
import { ResponseModel } from './response.model';
import { InterviewException } from './interview.exception';
import { isNil } from '@libs/isNil';
import { insteadNilOf } from '@libs/insteadNilOf';

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
        .json(new ResponseModel(statusCode, 'SERVER_ERROR'));
      return;
    }
    console.log(exception);
    const [message, details] = exception.message.split('|');

    response
      .status(statusCode)
      .json(
        new ResponseModel(
          statusCode,
          message as keyof Protocol,
          details as keyof Details,
          exception.cause,
        ),
      );
  }
}
