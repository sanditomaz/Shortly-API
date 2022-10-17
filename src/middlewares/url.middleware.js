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
  const { id } = req.params;
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

const validateShortUrl = async (req, res, next) => {
  const { shortUrl } = req.params;
  if (!shortUrl) return res.sendStatus(422);

  const selectUrl = await connection.query(
    `SELECT id, url, "usersId" FROM urls WHERE "shortUrl" = ($1);`,
    [shortUrl]
  );

  if (selectUrl.rows.length === 0) return res.status(404).send("Not found");

  const selectedUrl = selectUrl.rows[0].url;
  const userId = selectUrl.rows[0].usersId;
  const urlId = selectUrl.rows[0].id;

  res.locals.selectedUrl = selectedUrl;
  res.locals.userId = userId;
  res.locals.urlId = urlId;

  next();
};

const validateDeletion = async (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.sendStatus(422);

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

    const userUrl = await connection.query(
      `SELECT "usersId", id FROM urls WHERE id = ($1);`,
      [id]
    );

    if (userUrl.rows.length === 0) return res.sendStatus(404);

    const usersId = getUserId.rows[0].usersId;
    const userUrlId = userUrl.rows[0].usersId;
    const delUrlId = userUrl.rows[0].id;

    if (usersId !== userUrlId) return res.sendStatus(401);

    res.locals.delUrlId = delUrlId;

    next();
  } catch (error) {
    res.sendStatus(500);
  }

  next();
};

export { urlPostValidator, validateUrl, validateShortUrl, validateDeletion };
