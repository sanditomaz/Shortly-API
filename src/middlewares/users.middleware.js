import { connection } from "../database/database.js";

const validateUser = async (req, res, next) => {
  next();
};

export { validateUser };
