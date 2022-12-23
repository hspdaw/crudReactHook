-- Database: duties

-- DROP DATABASE IF EXISTS duties;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";	
CREATE DATABASE duties
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Spain.1252'
    LC_CTYPE = 'Spanish_Spain.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

COMMENT ON DATABASE duties
    IS 'Database for duties';

CREATE TABLE duties(
   id uuid DEFAULT uuid_generate_v4 (),
   name VARCHAR (255) NOT NULL,
   PRIMARY KEY (id)
);

COMMENT ON TABLE duties
    IS 'To-do list';
	
/*
INSERT INTO duties (name)
VALUES ('Set server with Express');
*/