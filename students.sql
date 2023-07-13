--
-- PostgreSQL port of the MySQL "World" database.
--
-- The sample data used in the world database is Copyright Statistics 
-- Finland, http://www.stat.fi/worldinfigures.
--

BEGIN;

SET client_encoding = 'LATIN1';

CREATE TABLE Students (
    id integer NOT NULL,
    name text NOT NULL,
    eMail text NOT NULL
);


CREATE TABLE Class (
    id integer NOT NULL,
    name text NOT NULL,
    classTeacher text NOT NULL,
    level integer NOT NULL
);

ALTER TABLE ONLY Students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);

ALTER TABLE ONLY Class
    ADD CONSTRAINT class_pkey PRIMARY KEY (id);


COPY Students (id, name, eMail) FROM stdin;
1	Bennet	AFG
2	Melissa	AFG
\.

COPY Class (id, name, classTeacher, level) FROM stdin;
1	TLS	Testlehrer	2
2	WLS	Testlehrer	1
\.


COMMIT;

ANALYZE Students;
ANALYZE Class;
