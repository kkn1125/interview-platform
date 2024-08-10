import { camelToSnake } from '@libs/camelToSnake';
import { isStringArray } from '@libs/isStringArray';
import { HttpStatus } from '@nestjs/common';
import { Code, Details, Message, Protocol } from '@src/protocol/protocol';

type TupleToObject = {
  code: Details[keyof Details][0];
  message: Details[keyof Details][1];
};

export class ResponseModel<T extends object> {
  //@ts-ignore
  readonly #status: number = HttpStatus.OK;

  code: Code;
  message: Message;
  details?: TupleToObject;
  items: T[] | undefined;
  data: T | undefined;

  constructor(status: HttpStatus, protocolType: keyof Protocol);
  constructor(
    status: HttpStatus,
    protocolType: keyof Protocol,
    details: keyof Details,
  );
  constructor(
    status: HttpStatus,
    protocolType: keyof Protocol,
    details: keyof Details,
    data: unknown,
  );
  constructor(
    status: HttpStatus,
    protocolType: keyof Protocol,
    details: keyof Details,
    data: T,
  );
  constructor(
    status: HttpStatus,
    protocolType: keyof Protocol,
    details: keyof Details,
    items: T[] | undefined,
  );
  constructor(
    status: HttpStatus,
    protocolType: keyof Protocol,
    details?: keyof Details,
    items?: T | T[] | undefined,
  ) {
    this.#status = status;

    this.code = Protocol.Code[protocolType];
    console.log(protocolType, details);
    if (protocolType in Protocol.Code && details) {
      const detailProtocol = Protocol.Details[protocolType][details];
      this.details = {
        code: detailProtocol[0],
        message: detailProtocol[1],
      };
    }
    this.message = Protocol.Message[protocolType];

    if (items instanceof Array) {
      if (isStringArray(items)) {
        this.items = items;
      } else {
        const snakeCaseItems = items.map((item) =>
          Object.fromEntries(
            Object.entries(item).map(([key, value]) => [
              camelToSnake(key),
              value,
            ]),
          ),
        );
        this.items = snakeCaseItems as T[];
      }
    } else {
      if (items) {
        const snakeCaseItem = Object.fromEntries(
          Object.entries(items).map(([key, value]) => [
            camelToSnake(key),
            value,
          ]),
        );
        this.data = snakeCaseItem as T;
      }
    }
  }

  get status() {
    return this.#status;
  }

  get [Symbol.toStringTag]() {
    return `${this.constructor.name}`;
  }

  toString() {
    return `[${this.#status}] ${this.constructor.name} (...) / IsError: ${!!this.message}`;
  }
}
