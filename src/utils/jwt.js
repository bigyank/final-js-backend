import jwt from 'jsonwebtoken';
import jwtExpress from 'express-jwt';

const { JWT_SECRET } = process.env;

export function createJwt(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' }, function (err, token) {
      if (err) return reject(err);
      resolve(token);
    });
  });
}

export const verifyJWT = jwtExpress({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
});
