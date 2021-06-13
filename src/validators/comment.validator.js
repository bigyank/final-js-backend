import { Joi, Segments } from 'celebrate';

// eslint-disable-next-line import/prefer-default-export
export const makeCommentValidator = {
  [Segments.BODY]: Joi.object().keys({
    body: Joi.string().required(),
    postId: Joi.string().required(),
  }),
};

export const editCommentValidator = {
  [Segments.BODY]: Joi.object().keys({
    body: Joi.string(),
  }),
};
