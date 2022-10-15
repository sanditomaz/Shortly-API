import { connection } from "../database/database.js";
import { signUpValidation, signInValidation } from "../validator/validator.js";
import bcrypt from "bcrypt";

const signUpValidator = async (req, res, next) => {
  const validate = signUpValidation(req.body, {
    abortEarly: false,
  });

  if (validate.error) {
    const errors = validate.error.details.map((detail) => detail.message);
    res.status(422).send(errors);
    return;
  }

  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(422).send("Passwords don't match");
  }

  try {
    const checkEmail = await connection.query(
      `SELECT email FROM users WHERE email = ($1);`,
      [email]
    );

    if (checkEmail.rows[0]) return res.status(409).send("Email already exists");

    res.locals.name = name;
    next();
  } catch (error) {
    res.sendStatus(500);
  }
};

const signInValidator = async (req, res, next) => {
  const validate = signInValidation(req.body, {
    abortEarly: false,
  });

  if (validate.error) {
    const errors = validate.error.details.map((detail) => detail.message);
    res.status(422).send(errors);
    return;
  }

  const { email, password } = req.body;

  try {
    const validUser = await connection.query(
      `SELECT email, password, id FROM users WHERE email = ($1);`,
      [email]
    );

    if (validUser.rows.length === 0) {
      res.status(401).send("User not found, check email or password");
      return;
    }

    const validPass = bcrypt.compareSync(password, validUser.rows[0].password);
    const userId = validUser.rows[0].id;

    if (!validPass) {
      res.status(401).send("User not found, check email or password");
      return;
    }

    res.locals.userId = userId;
    next();
  } catch (error) {
    res.sendStatus(500);
  }
};

export { signUpValidator, signInValidator };
