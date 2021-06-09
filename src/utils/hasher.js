import argon from "argon2";

export async function hashPassword(plainPassword) {
  return argon.hash(plainPassword);
}
