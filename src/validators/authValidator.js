import { Joi, Segments } from "celebrate";

const authSchema = {
  email: Joi.string().email().lowercase().trim().required(),
  password: Joi.string().required(),
};

export const loginFormValidator = {
  [Segments.BODY]: Joi.object().keys({
    ...authSchema,
  }),
};

export const signupFormValidator = {
  [Segments.BODY]: Joi.object().keys({
    ...authSchema,
    fullName: Joi.string().required(),
  }),
};
