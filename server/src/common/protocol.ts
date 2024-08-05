export const Code = {
  SIGNUP: 100,
  SERVER_ERROR: 10000,
} as const;
export type Code = (typeof Code)[keyof typeof Code];

export const Message = {
  SIGNUP: 'success sign up',
  SERVER_ERROR: 'server error',
} as const;
export type Message = (typeof Message)[keyof typeof Message];

export type ProtocolKeys = keyof typeof Code | keyof typeof Message;

/* Error Protocol */
export const Protocol = {
  // Code, Message
  Code,
  Message,
  /* 100 ~ 999 model error */
  // 100 ~ user
  // 200 ~ question
  // 300 ~ bundle question
  /* 1000 ~ 9999 feature error */
  // 1000 ~ database error
  /* 10000 ~ server error */
  // 10000 ~ server error
} as const;
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export function responseProtocol(
  key: keyof typeof Code | keyof typeof Message,
) {
  return {
    protocol: Code[key],
    message: Message[key],
  };
}
