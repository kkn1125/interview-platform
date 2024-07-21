import { HttpException, HttpExceptionOptions } from '@nestjs/common';
import { Protocol } from '@src/common/protocol';

export class InterviewException<
  T extends keyof Protocol,
> extends HttpException {
  constructor(
    response: string | Record<string, any>,
    status: number,
    options?: HttpExceptionOptions,
  );
  constructor(response: T, status: number, options?: HttpExceptionOptions);
  constructor(
    response: (string | Record<string, any>) & T,
    status: number,
    options?: HttpExceptionOptions,
  ) {
    super(response, status, options);
  }
}
