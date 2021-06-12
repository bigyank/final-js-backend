import rateLimit from 'express-rate-limit';

const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 60, // 1hour
  max: 100, // limit each IP to 100 requests per windowMs
});

export default rateLimiter;
