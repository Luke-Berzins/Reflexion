-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE sequence (
  id SERIAL PRIMARY KEY NOT NULL,
  sequence_id INTEGER REFERENCES sequence(id),
  pose_id INTEGER REFERENCES pose(id),
  order INTEGER NOT NULL
);
