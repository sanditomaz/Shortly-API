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
      return res.sendStatus(401);
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
  const { id } = req.query;

  if (!id) return res.sendStatus(422);

  const selectId = await connection.query(
    `SELECT id, "shortUrl", url FROM urls WHERE id = ($1);`,
    [id]
  );

  if (
    selectId.rows[0].shortUrl.length === 0 ||
    selectId.rows[0].shortUrl === null
  ) {
    return res.status(404).send("Not found");
  }

  const selectedId = selectId.rows[0];
  res.locals.selectedId = selectedId;

  next();
};

const validateDeletion = async (req, res, next) => {
  next();
};

export { urlPostValidator, validateUrl, validateDeletion };
