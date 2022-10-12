import { connection } from "../database/database.js";
import { signUpValidation, signInValidation } from "../validator/validator.js";

const signUpValidator = async (req, res, next) => {
  const validate = signUpValidation(req.body, {
    abortEarly: false,
  });

  if (validate.error) {
    const errors = validate.error.details.map((detail) => detail.message);
    res.status(400).send(errors);
    return;
  }
  next();
};

const signInValidator = async (req, res, next) => {
  const validate = signInValidation(req.body, {
    abortEarly: false,
  });

  if (validate.error) {
    const errors = validate.error.details.map((detail) => detail.message);
    res.status(400).send(errors);
    return;
  }
  next();
};

export { signUpValidator, signInValidator };
