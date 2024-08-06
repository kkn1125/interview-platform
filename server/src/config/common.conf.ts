import { HOST, PORT, SECRET_KEY } from '@common/variables';
import { registerAs } from '@nestjs/config';

export default registerAs('common', () => ({
  host: HOST,
  port: PORT,
  secretKey: SECRET_KEY,
}));
