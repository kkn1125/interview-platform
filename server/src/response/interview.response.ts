import { Code, Protocol } from '@src/protocol/protocol';

export class InterviewResponse<T = object> {
  ok: boolean;
  #status: number;
  code: number;
  message?: string;
  items?: any;
  data?: any;
  details?: string[];

  constructor(
    protocol: keyof typeof Code,
    status: number,
    option?: { data?: T; details?: string[] },
  ) {
    const code = Protocol.Code[protocol];
    const message = Protocol.Message[protocol];

    this.ok = code >= 0 && code <= 200;
    this.#status = status;
    this.code = code;
    this.message = message;
    if (option) {
      const { data, details } = option;
      details && (this.details = details);
      if (data) {
        if (data instanceof Array) {
          this.items = data;
        } else {
          this.data = data;
        }
      }
    }
  }

  json() {
    return {
      ok: this.ok,
      code: this.code,
      message: this.message,
      items: this.items,
      data: this.data,
      details: this.details,
    };
  }
}
