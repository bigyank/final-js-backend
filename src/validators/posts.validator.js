import { Joi, Segments } from 'celebrate';

// eslint-disable-next-line import/prefer-default-export
export const makePostValidator = {
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    image: Joi.string().required(),
    type: Joi.string().required(),
    lat: Joi.number().required(),
    lon: Joi.number().required(),
  }),
};

export const editPostValidator = {
  [Segments.BODY]: Joi.object().keys({
   title: Joi.string().required(),
    body: Joi.string().required(),
    image: Joi.string().required(),
    type: Joi.string().required(),
    lat: Joi.number().required(),
    lon: Joi.number().required(),
  }),
};
