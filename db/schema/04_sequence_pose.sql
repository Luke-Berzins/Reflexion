-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS sequence_poses CASCADE;
CREATE TABLE sequence_poses (
  id SERIAL PRIMARY KEY NOT NULL,
  sequence_id INTEGER REFERENCES sequences(id),
  pose_id INTEGER REFERENCES poses(id),
  overlay INTEGER NOT NULL
);
