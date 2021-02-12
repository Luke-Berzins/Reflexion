-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE sequence_pose (
  id SERIAL PRIMARY KEY NOT NULL,
  sequence_id INTEGER REFERENCES sequences(id),
  pose_id INTEGER REFERENCES poses(id),
  order INTEGER NOT NULL
);
