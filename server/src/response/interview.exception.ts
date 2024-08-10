import { HttpException, HttpExceptionOptions } from '@nestjs/common';
import { Protocol } from '@src/protocol/protocol';

export class InterviewException<
  T extends keyof Protocol,
> extends HttpException {
  constructor(
    response: T,
    status: number,
    details?: keyof (typeof Protocol)['Details'][T],
    options?: HttpExceptionOptions,
  );
  constructor(response: T, status: number, options?: HttpExceptionOptions);
  constructor(
    response: T,
    status: number,
    detailsOrOptions?:
      | keyof (typeof Protocol)['Details'][T]
      | HttpExceptionOptions,
    options?: HttpExceptionOptions,
  ) {
    let responseText: T | string = response;
    if (typeof detailsOrOptions === 'string') {
      responseText = response + '|' + detailsOrOptions;
    }
    super(responseText, status, options);
  }
}
