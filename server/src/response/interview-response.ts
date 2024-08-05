import {
  Code,
  Message,
  ProtocolKeys,
  responseProtocol,
} from '@common/protocol';
import { HttpStatus } from '@nestjs/common';

export class InterviewResponse {
  ok!: boolean;
  #status!: HttpStatus;
  protocol!: Code;
  message!: Message;
  cause?: any;

  constructor(status: HttpStatus, protocol: ProtocolKeys, cause?: any) {
    const { protocol: code, message } = responseProtocol(protocol);
    this.#status = status;
    this.ok = this.#status === 200 || this.#status === 201;
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
