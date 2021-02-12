-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE poses (
  id SERIAL PRIMARY KEY NOT NULL,
  sequence_id INTEGER REFERENCES sequences(id),
  pose_id INTEGER REFERENCES poses(id),
  overlay INTEGER NOT NULL
);
