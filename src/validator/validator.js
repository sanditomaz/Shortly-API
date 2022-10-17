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
  password: Joi.string().min(3).empty().required().regex(/^\S+$/).messages({
    "string.min": "Password should have at least 3 characters",
    "string.empty": "Password cannot be an empty field",
    "string.pattern.base": "No empty spaces allowed",
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
  url: Joi.string()
    .empty()
    .pattern(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/
    )
    .required()
    .messages({
      "string.empty": "Url cannot be an empty field",
      "string.url": "Invalid url format",
      "any.required": "Url is required",
      "string.pattern.base":
        "Invalid url! Url must start with http:// or https://",
    }),
});

const signUpValidation = validator(signUpSchema);
const signInValidation = validator(signInSchema);
const urlValidation = validator(urlShortenSchema);

export { signUpValidation, signInValidation, urlValidation };
