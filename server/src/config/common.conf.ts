import { HOST, PORT } from '@common/variables';
import { registerAs } from '@nestjs/config';

export default registerAs('common', () => ({
  host: HOST,
  port: PORT,
}));
