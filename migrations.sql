psql

CREATE DATABASE dashboard;

\c dashboard;

CREATE TABLE cards (id SERIAL PRIMARY KEY, name VARCHAR(80), message VARCHAR(255));
