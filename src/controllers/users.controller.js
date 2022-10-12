import { connection } from "../database/database.js";

async function sendUser(req, res) {
  res.sendStatus("OKaaa");
}

async function sendRanking(req, res) {
  res.sendStatus("OKaaa");
}

export { sendUser, sendRanking };
