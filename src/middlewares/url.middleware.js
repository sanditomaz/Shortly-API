import { connection } from "../database/database.js";
import { urlValidation } from "../validator/validator.js";

const urlPostValidator = async (req, res, next) => {
  const validate = urlValidation(req.body, {
    abortEarly: false,
  });

  if (validate.error) {
    const errors = validate.error.details.map((detail) => detail.message);
    res.status(400).send(errors);
    return;
  }
  next();
};

const validateUrl = async (req, res, next) => {
  next();
};

const validateDeletion = async (req, res, next) => {
  next();
};

export { urlPostValidator, validateUrl, validateDeletion };
