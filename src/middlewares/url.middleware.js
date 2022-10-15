import { connection } from "../database/database.js";
import { urlValidation } from "../validator/validator.js";

const urlPostValidator = async (req, res, next) => {
  const validate = urlValidation(req.body, {
    abortEarly: false,
  });

  if (validate.error) {
    const errors = validate.error.details.map((detail) => detail.message);
    res.status(422).send(errors);
    return;
  }

  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const getUserId = await connection.query(
      `SELECT "usersId" FROM sessions WHERE token = ($1);`,
      [token]
    );

    if (getUserId.rows.length === 0) {
      return res.sendStatus(404);
    }

    const usersId = getUserId.rows[0].usersId;
    res.locals.usersId = usersId;
    res.locals.token = token;

    next();
  } catch (error) {
    res.sendStatus(error);
  }
};

const validateUrl = async (req, res, next) => {
  next();
};

const validateDeletion = async (req, res, next) => {
  next();
};

export { urlPostValidator, validateUrl, validateDeletion };
