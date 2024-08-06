import * as crypto from 'crypto';

export function createHmacToken(
  secretKey: string,
  email: string,
  password: string,
) {
  const hmac = crypto.createHmac('sha256', secretKey, {});
  hmac.update(email + '|' + password);
  const token = hmac.digest('hex');
  return token;
}
