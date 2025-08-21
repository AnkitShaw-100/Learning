import Joi from "joi";

export const createTaskSchema = Joi.object({
  category: Joi.string().min(1).max(100).required(),
  date: Joi.date().iso().optional(),
  description: Joi.string().max(1000).allow("", null).optional(),
});
