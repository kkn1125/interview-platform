import { describe, expect, it } from 'vitest';
import { responseProtocol } from './protocol';

describe('[TESt] protocol test', () => {
  it('[OK] responseProtocol SIGNUP', () => {
    expect(responseProtocol('SIGNUP').code).toStrictEqual(100);
  });
});
