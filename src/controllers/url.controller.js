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

    res.status(201).send(shortUrl);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function sendUrl(req, res) {
  const { selectedId } = res.locals;

  res.status(200).send(selectedId);
}

async function sendShortUrl(req, res) {
  const { selectedUrl, userId, urlId } = res.locals;

  connection.query(
    `INSERT INTO urlscount ("usersId", "urlId") VALUES($1, $2);`,
    [userId, urlId]
  );

  res.redirect(selectedUrl);
}

async function deleteUrl(req, res) {
  res.send("OKaaa");
}

export { insertUrl, sendUrl, sendShortUrl, deleteUrl };
