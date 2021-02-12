-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS poses CASCADE;
CREATE TABLE poses (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  video VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  overlay VARCHAR(255) NOT NULL
);
