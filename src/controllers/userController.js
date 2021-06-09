import userService from "../services/userService.js";
import { hashPassword } from "../utils/hasher.js";

export async function createUser(req, res) {
  const { email, password, fullName } = req.body;
  const hashedPassword = await hashPassword(password);
  const createdUser = await userService.createUser({
    email,
    password: hashedPassword,
    full_name: fullName,
  });

  res.status(201).send(createdUser);
}
