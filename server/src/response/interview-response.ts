import {
  Code,
  Message,
  ProtocolKeys,
  responseProtocol,
} from '@common/protocol';

export class InterviewResponse {
  protocol!: Code;
  message!: Message;

  constructor(protocol: ProtocolKeys) {
    const { code, message } = responseProtocol(protocol);
    this.protocol = code;
    this.message = message;
  }

  output() {
    // resposne body create
    return '';
  }
}
