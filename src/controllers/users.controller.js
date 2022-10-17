import { connection } from "../database/database.js";

async function sendUser(req, res) {
  const { userId } = res.locals;

  try {
    const userInfo = await connection.query(
      `SELECT users.id, users.name, COUNT(urlscount."urlId") AS "visitCount" FROM users JOIN urlscount ON urlscount."usersId" = users.id WHERE users.id = $1 GROUP BY users.id;`,
      [userId]
    );
    const urlList = await connection.query(
      `SELECT urls.id, urls."shortUrl", urls."url", COUNT(urlscount."urlId") AS "visitCount" FROM urls JOIN urlscount ON urlscount."urlId" = urls.id WHERE urls."usersId" = $1 GROUP BY urls.id;`,
      [userId]
    );

    const userList = userInfo.rows[0];
    userList.shortenedUrls = urlList.rows;

    res.status(200).send(userList);
  } catch (error) {
    res.send(error);
  }
}

async function sendRanking(req, res) {
  const users = await connection.query(
    `SELECT users.id, users.name, count(distinct urls.id) AS "linksCount", count(urlscount."urlId") AS "visitCount" FROM users LEFT JOIN urls ON urls."usersId"= users.id LEFT JOIN urlscount ON urlscount."urlId" = urls.id GROUP BY users.id ORDER BY "visitCount" DESC;`
  );

  res.status(200).send(users.rows.slice(0, 10));
}

export { sendUser, sendRanking };
