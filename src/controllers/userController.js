import userService from "../services/userService.js";

export async function getProfileInfo(req, res) {
  const { id } = req.user;
  const foundUser = await userService.findUser({ id });
  res.status(200).send(foundUser);
}
