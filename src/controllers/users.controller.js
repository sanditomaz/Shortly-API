import { connection } from "../database/database.js";

async function sendUser(req, res) {
  const { userId } = res.locals;
  let userInfo;

  try {
    userInfo = await connection.query(`SELECT * FROM users`);

    console.log(userInfo);
    res.send("sandiiii");
  } catch (error) {
    console.log(error);
    console.log(error);
    console.log(error);
    console.log(error);
    console.log(error);
    res.send(error);
  }
}

async function sendRanking(req, res) {
  res.sendStatus("OKaaa");
}

export { sendUser, sendRanking };
