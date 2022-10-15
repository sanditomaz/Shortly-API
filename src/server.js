import express from "express";
import cors from "cors";
import entry from "./routers/entry.router.js";
import url from "./routers/url.router.js";
import users from "./routers/users.router.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(entry);
app.use(url);
app.use(users);

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
