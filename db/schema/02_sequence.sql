-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS sequences CASCADE;
CREATE TABLE sequences (
  id SERIAL PRIMARY KEY NOT NULL,
  sequence_id INTEGER REFERENCES sequences(id),
  name VARCHAR(255) NOT NULL
);
