import { connection } from "../database/database.js";

const validateUser = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const valid = await connection.query(
      `SELECT * FROM sessions WHERE token = ($1);`,
      [token]
    );

    const userId = valid.rows[0].usersId;

    if (valid.rows.length === 0) return res.sendStatus(401);
    //if (userId === null) return res.sendStatus(404);

    res.locals.userId = userId;
    next();
  } catch (error) {
    res.sendStatus(500);
  }

  next();
};

export { validateUser };
