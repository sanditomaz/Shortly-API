--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "usersId" integer,
    token character varying(500),
    "createdAt" date DEFAULT now()
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "usersId" integer,
    "createdAt" date DEFAULT now()
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: urlscount; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urlscount (
    id integer NOT NULL,
    "usersId" integer,
    "urlId" integer
);


--
-- Name: urlscount_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urlscount_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urlscount_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urlscount_id_seq OWNED BY public.urlscount.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(55) NOT NULL,
    password character varying(100) NOT NULL,
    "createdAt" date DEFAULT now()
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: urlscount id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urlscount ALTER COLUMN id SET DEFAULT nextval('public.urlscount_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 6, '7514c841-a949-47d6-9e0c-04415b9694af', '2022-10-15');
INSERT INTO public.sessions VALUES (2, 7, 'd9428db0-8a26-4df5-b04c-e31ffe7b48e5', '2022-10-15');
INSERT INTO public.sessions VALUES (3, 7, '8f1b2e0b-cc91-4279-91a2-c9cd1ab46189', '2022-10-15');
INSERT INTO public.sessions VALUES (4, 5, '98f05c9b-06b8-4164-9bfe-6d9003567a1f', '2022-10-15');
INSERT INTO public.sessions VALUES (5, NULL, '32156489', '2022-10-17');
INSERT INTO public.sessions VALUES (6, 9, 'e7d8ff1e-4f7c-4594-a692-efeb7b7454ae', '2022-10-17');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 'http://google.com', 'bK7eJkyS', 6, '2022-10-15');
INSERT INTO public.urls VALUES (2, 'http://google.com', 'vN6tUgy1', 6, '2022-10-15');
INSERT INTO public.urls VALUES (3, 'https://en.wikipedia.org/wiki/Avril_Lavigne', '4BJOGbvB', 6, '2022-10-15');
INSERT INTO public.urls VALUES (4, 'https://en.wikipedia.org/wiki/Avril_Lavigne', '6vXHAByM', 6, '2022-10-15');
INSERT INTO public.urls VALUES (6, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'hMbpIsPG', 6, '2022-10-15');
INSERT INTO public.urls VALUES (7, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'ySF6hYzo', 6, '2022-10-15');
INSERT INTO public.urls VALUES (8, 'https://en.wikipedia.org/wiki/Avril_Lavigne', '1tLuiQ4D', 6, '2022-10-15');
INSERT INTO public.urls VALUES (9, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'txvM5KIQ', 6, '2022-10-15');
INSERT INTO public.urls VALUES (10, 'https://en.wikipedia.org/wiki/Avril_Lavigne', '3-JB7bIJ', 6, '2022-10-15');
INSERT INTO public.urls VALUES (11, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'ZTjqr3iD', 6, '2022-10-15');
INSERT INTO public.urls VALUES (12, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'wbGPgZh4', 6, '2022-10-15');
INSERT INTO public.urls VALUES (13, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'qnJpGzMJ', 6, '2022-10-15');
INSERT INTO public.urls VALUES (14, 'https://en.wikipedia.org/wiki/Avril_Lavigne', '9zpQsr_r', 6, '2022-10-15');
INSERT INTO public.urls VALUES (15, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'Co04eYXC', 6, '2022-10-15');
INSERT INTO public.urls VALUES (16, 'https://en.wikipedia.org/wiki/Avril_Lavigne', '4HUZZI1R', 6, '2022-10-15');
INSERT INTO public.urls VALUES (17, 'https://en.wikipedia.org/wiki/Avril_Lavigne', '1H1PIIjp', NULL, '2022-10-15');
INSERT INTO public.urls VALUES (18, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'DTJUk7aH', NULL, '2022-10-15');
INSERT INTO public.urls VALUES (19, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'jZ-PDW8S', 6, '2022-10-15');
INSERT INTO public.urls VALUES (20, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'q0rSOf06', 6, '2022-10-15');
INSERT INTO public.urls VALUES (21, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'uJE0XyEv', 6, '2022-10-15');
INSERT INTO public.urls VALUES (23, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'ewhS_44s', NULL, '2022-10-15');
INSERT INTO public.urls VALUES (24, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'pv9qgW2Q', 7, '2022-10-15');
INSERT INTO public.urls VALUES (25, 'https://en.wikipedia.org/wiki/Avril_Lavigne', 'T41nRL52', 6, '2022-10-15');
INSERT INTO public.urls VALUES (27, 'https://en.wikipedia.org/wiki/Blink-182', 'O3_VW06_', 9, '2022-10-17');
INSERT INTO public.urls VALUES (28, 'https://www.youtube.com/watch?v=ujNeHIo7oTE', 'lVz2XJKN', 9, '2022-10-17');
INSERT INTO public.urls VALUES (29, 'https://www.youtube.com/watch?v=ujNeHIo7oTE', '485O9uUr', 9, '2022-10-17');
INSERT INTO public.urls VALUES (30, 'https://en.wikipedia.org/wiki/Blink-182', '8ka1nxq6', 9, '2022-10-17');
INSERT INTO public.urls VALUES (31, 'https://en.wikipedia.org/wiki/Blink-182', 'M6aUGkRR', 9, '2022-10-17');
INSERT INTO public.urls VALUES (32, 'https://en.wikipedia.org/wiki/Blink-182', '9tWplUgH', 9, '2022-10-17');
INSERT INTO public.urls VALUES (33, 'https://en.wikipedia.org/wiki/Blink-182', 'kAhplUHM', 9, '2022-10-17');


--
-- Data for Name: urlscount; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urlscount VALUES (47, 6, 1);
INSERT INTO public.urlscount VALUES (48, 6, 1);
INSERT INTO public.urlscount VALUES (49, 6, 1);
INSERT INTO public.urlscount VALUES (50, 6, 1);
INSERT INTO public.urlscount VALUES (51, 6, 3);
INSERT INTO public.urlscount VALUES (52, 6, 3);
INSERT INTO public.urlscount VALUES (53, 7, 24);
INSERT INTO public.urlscount VALUES (54, 7, 24);
INSERT INTO public.urlscount VALUES (55, 7, 24);
INSERT INTO public.urlscount VALUES (56, 9, 27);
INSERT INTO public.urlscount VALUES (57, 9, 27);
INSERT INTO public.urlscount VALUES (58, 9, 27);
INSERT INTO public.urlscount VALUES (59, 9, 27);
INSERT INTO public.urlscount VALUES (60, 9, 27);
INSERT INTO public.urlscount VALUES (61, 9, 27);
INSERT INTO public.urlscount VALUES (62, 9, 27);
INSERT INTO public.urlscount VALUES (63, 9, 27);
INSERT INTO public.urlscount VALUES (64, 9, 27);
INSERT INTO public.urlscount VALUES (65, 9, 27);
INSERT INTO public.urlscount VALUES (66, 9, 29);
INSERT INTO public.urlscount VALUES (67, 9, 29);
INSERT INTO public.urlscount VALUES (68, 9, 28);
INSERT INTO public.urlscount VALUES (69, 9, 28);
INSERT INTO public.urlscount VALUES (70, 9, 28);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (5, 'Sunday', 'sunday@driven.com.br', '$2b$10$Wkqdo5Eh6tCnYo7PzkC2MOSFCSxpKMnZGZ2vfQEt2EhLYc1exR18W', '2022-10-14');
INSERT INTO public.users VALUES (6, 'Sandi', 'sandi@driven.com.br', '$2b$10$0zmBNdOFrFp4hfWzb7DnA.VBYaenJ/BC0cmxvI4lA5k2wwe5nn94e', '2022-10-14');
INSERT INTO public.users VALUES (7, 'João', 'joao@driven.com.br', '$2b$10$nUCU3jkKGAP6UknFLOTSJewAi6sSEztGcJyurb4ZjyDO73eQSYE/m', '2022-10-14');
INSERT INTO public.users VALUES (8, 'god help', 'godhelpme@driven.com.br', '$2b$10$HswXerfwcRw/NGAD6LYWTO8zEAWlZHhCKid5qaXIkPSPWcDB9OpaS', '2022-10-15');
INSERT INTO public.users VALUES (9, 'Blink', 'blink@blink.com', '$2b$10$/GirhulVGglNL1Y3VKFRUODNIU/1q.q8ODWfyA9aMv.QPUgrXyA1a', '2022-10-17');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 6, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 33, true);


--
-- Name: urlscount_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urlscount_id_seq', 70, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 9, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urlscount urlscount_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urlscount
    ADD CONSTRAINT urlscount_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_usersId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES public.users(id);


--
-- Name: urls urls_usersId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES public.users(id);


--
-- Name: urlscount urlscount_urlId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urlscount
    ADD CONSTRAINT "urlscount_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES public.urls(id);


--
-- Name: urlscount urlscount_usersId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urlscount
    ADD CONSTRAINT "urlscount_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

