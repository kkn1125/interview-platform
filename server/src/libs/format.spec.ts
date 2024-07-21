import { describe, expect, it } from 'vitest';
import { format } from './format';

describe('[TEST] format', () => {
  it('[OK] format', () => {
    const formed = format(new Date(2024, 6, 21, 16, 18), 'YYYY-MM-dd HH:mm');
    expect(formed).toStrictEqual('2024-07-21 16:18');
  });
});
