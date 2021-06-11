import { Joi, Segments } from "celebrate";

export const authFormValidator = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().lowercase().trim().required(),
    password: Joi.string().required(),
  }),
};
