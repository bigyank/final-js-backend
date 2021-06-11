import { Joi, Segments } from "celebrate";

export const makePostValidator = {
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
  }),
};
