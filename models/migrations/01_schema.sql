DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS pose CASCADE;
DROP TABLE IF EXISTS pose_variation_images CASCADE;


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
  pose_image_url VARCHAR(255),
  etymology_origin TEXT,
  description TEXT,
  variations TEXT,
  see_also TEXT,
  reference TEXT,
  sources TEXT,
  further_reading TEXT,
  video_url VARCHAR(255),
  created_at TIMESTAMP, 
  updated_at TIMESTAMP, 
  author_id  INTEGER REFERENCES users(id) ON DELETE CASCADE,
  approved BOOLEAN DEFAULT false
);


-- 03 POSE VARIATION TABLE
CREATE TABLE pose_variation_images (
  id SERIAL PRIMARY KEY NOT NULL,
  pose_id  INTEGER REFERENCES pose(id) ON DELETE CASCADE,
  image VARCHAR(255),
  image_url VARCHAR(255)
);