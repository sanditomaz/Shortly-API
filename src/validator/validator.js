import Joi from "joi";
const validator = (schema) => (payload) => schema.validate(payload);

const signUpSchema = Joi.object({
  name: Joi.string().min(1).empty().required().messages({
    "string.min": "Name should be min 1 character",
    "string.empty": "Name cannot be an empty field",
    "any.required": "Name is required",
  }),
  email: Joi.string().email().empty().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email cannot be an empty field",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(3).empty().required().messages({
    "string.min": "Password should have at least 3 characters",
    "string.empty": "Password cannot be an empty field",
    "any.required": "Password is required",
  }),
  confirmPassword: Joi.string().empty().required().messages({
    "string.empty": "ConfirmPassword field cannot be empty",
    "any.required": "ConfirmPassword field is required",
  }),
});

const signInSchema = Joi.object({
  email: Joi.string().email().empty().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email cannot be an empty field",
    "any.required": "Email is required",
  }),
  password: Joi.string().empty().required().messages({
    "string.empty": "Password cannot be an empty field",
    "any.required": "Password is required",
  }),
});

const urlShortenSchema = Joi.object({
  url: Joi.string().empty().uri().required().messages({
    "string.empty": "Url cannot be an empty field",
    "string.uri": "Invalid url format",
    "any.required": "Url is required",
  }),
});

const signUpValidation = validator(signUpSchema);
const signInValidation = validator(signInSchema);
const urlValidation = validator(urlShortenSchema);

export { signUpValidation, signInValidation, urlValidation };
