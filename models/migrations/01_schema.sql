DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS pose CASCADE;

-- 01 USER TABLE
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  avatar VARCHAR,
  created_at TIMESTAMP, 
  role VARCHAR(255) NOT NULL DEFAULT 'user'
);


-- 02 POSE TABLE
CREATE TABLE pose (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  pose_description TEXT,
  pose_image VARCHAR(255),
  etymology_origin TEXT,
  description TEXT,
  variations TEXT,
  see_also TEXT,
  reference TEXT,
  sources TEXT,
  further_reading TEXT,
  created_at TIMESTAMP, 
  updated_at TIMESTAMP, 
  author_id  INTEGER REFERENCES users(id) ON DELETE CASCADE,
  approved BOOLEAN DEFAULT false
);