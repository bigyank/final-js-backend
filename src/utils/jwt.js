import jw2 from "jsonwebtoken";
const { JWT_SECRET } = process.env;

export function createJwt(payload) {
  return new Promise((resolve, reject) => {
    jw2.sign(payload, JWT_SECRET, { expiresIn: "7d" }, function (err, token) {
      if (err) return reject(err);
      resolve(token);
    });
  });
}
