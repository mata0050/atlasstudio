const asyncHandler = require('express-async-handler');

// connect DB
const pool = require('../config/db');

// @route    GET /api/pose
// @desc     GET all pose
// @access   Public
const getAllPose = asyncHandler(async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM pose');
  res.json(rows);
});

// @route    POST /api/pose
// @desc     ADD pose to database
// @access   Private
const addPose = asyncHandler(async (req, res) => {
  const {
    title,
    pose_description,
    pose_image,
    etymology_origin,
    description,
    variations,
    see_also,
    reference,
    sources,
    further_reading,
    author_id,
    video_url,
  } = req.body;
  const created_at = new Date();

  const { rows } = await pool.query(
    'INSERT INTO pose(   title, pose_description, pose_image, etymology_origin, description, variations, see_also, reference, sources, further_reading, author_id, video_url,created_at) VALUES( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
    [
      title,
      pose_description,
      pose_image,
      etymology_origin,
      description,
      variations,
      see_also,
      reference,
      sources,
      further_reading,
      author_id,
      video_url,
      created_at,
    ]
  );

  res.json(rows);
});

// @route    POST /api/pose
// @desc     ADD pose to database
// @access   Private
const addNote = asyncHandler(async (req, res) => {
  const { note } = req.body;

  const { rows } = await pool.query(
    'INSERT INTO note(   note) VALUES( $1) RETURNING *',
    [note]
  );

  res.json(rows);
});

module.exports = {
  getAllPose,
  addPose,
  addNote,
};
