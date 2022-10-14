CREATE DATABASE shortly;

CREATE TABLE "users" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email  VARCHAR(55) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    "createdAt" DATE DEFAULT NOW()
);


CREATE TABLE "urls" (
    id SERIAL PRIMARY KEY,
    url TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "usersId" INTEGER REFERENCES "users"("id"),
    "createdAt" DATE DEFAULT NOW()
);

CREATE TABLE "urlscount" (
    id SERIAL PRIMARY KEY,
    "usersId" INTEGER REFERENCES "users"("id"),
    "urlId" INTEGER REFERENCES "urls"("id")
);