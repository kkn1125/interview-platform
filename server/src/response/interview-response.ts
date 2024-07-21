import {
  Code,
  Message,
  ProtocolKeys,
  responseProtocol,
} from '@common/protocol';
import { HttpStatus } from '@nestjs/common';

export class InterviewResponse {
  status!: HttpStatus;
  protocol!: Code;
  message!: Message;
  cause?: any;

  constructor(status: HttpStatus, protocol: ProtocolKeys, cause?: any) {
    const { code, message } = responseProtocol(protocol);
    this.status = status;
    this.protocol = code;
    this.message = message;

    if (cause) {
      this.cause = cause;
    }
  }

  output() {
    // resposne body create
    return '';
  }
}
