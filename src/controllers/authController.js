import userService from "../services/userService.js";
import { comparePassword, hashPassword } from "../utils/hasher.js";
import { createJwt } from "../utils/jwt.js";

export async function signup(req, res) {
  const { email, password, fullName } = req.body;
  const hashedPassword = await hashPassword(password);
  const createdUser = await userService.createUser({
    email,
    password: hashedPassword,
    full_name: fullName,
  });

  const token = await createJwt({ id: createdUser.get("id") });
  res.status(201).send({ user: createdUser, token });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const foundUser = await userService.findUser({ email });

  if (
    foundUser &&
    (await comparePassword(foundUser.get("password"), password))
  ) {
    const token = await createJwt({ id: foundUser.get("id") });
    return res.status(201).send({ user: foundUser, token });
  }

  res.status(400).send({ message: "email or password didn't match" });
}
