import argon from 'argon2';

export async function hashPassword(plainPassword) {
  return argon.hash(plainPassword);
}

export async function comparePassword(hash, plainPassword) {
  return argon.verify(hash, plainPassword);
}
