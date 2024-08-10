export const Code = {
  SUCCESS: 100,
  USER_ERROR: 200,
  DB_ERROR: 300,
  SERVER_ERROR: 10000,
} as const;
export type Code = (typeof Code)[keyof typeof Code];

export const Message = {
  SUCCESS: 'success',
  USER_ERROR: 'user error',
  DB_ERROR: 'local database error',
  SERVER_ERROR: 'server error',
} as const;
export type Message = (typeof Message)[keyof typeof Message];

export const Details = {
  USER_ERROR: {
    SIGN_UP_ERROR: [100, 'sign up error'],
    NOT_FOUND_ERROR: [101, 'not found user'],
  },
  DB_ERROR: {
    REQUEST_ERROR: [100, 'db request error'],
    NO_CHANGE_ROWS: [101, 'no change rows'],
  },
  SERVER_ERROR: {
    FATAL_ERROR: [100, 'fatal error'],
  },
} as const;
export type Details = (typeof Details)[keyof typeof Details];

export const Protocol = {
  Code,
  Message,
  Details,
} as const;
export type Protocol = (typeof Protocol)[keyof typeof Protocol];
