import { connection } from "../database/database.js";
import { nanoid } from "nanoid";

async function insertUrl(req, res) {
  const { url } = req.body;
  const shortUrl = nanoid(8);

  try {
    const { usersId } = res.locals;

    connection.query(
      `INSERT INTO urls (url, "shortUrl", "usersId") VALUES($1, $2, $3);`,
      [url, shortUrl, usersId]
    );

    const urlId = await connection.query(
      `SELECT id FROM urls WHERE "usersId" = ($1);`,
      [usersId]
    );

    urlId.rows.map((u) =>
      connection.query(
        `INSERT INTO urlscount ("usersId", "urlId") VALUES($1, $2);`,
        [usersId, u.id]
      )
    );

    res.status(201).send(shortUrl);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function sendUrl(req, res) {
  res.sendStatus("OKaaa");
}

async function sendShortUrl(req, res) {
  res.sendStatus("OKaaa");
}

async function deleteUrl(req, res) {
  res.sendStatus("OKaaa");
}

export { insertUrl, sendUrl, sendShortUrl, deleteUrl };
