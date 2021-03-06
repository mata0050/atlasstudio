const express = require('express');
const router = express.Router();
const auth = require('../../middleware/authMiddleware');
const {
  addPose,
  getAllPose,
  addNote
} = require('../../controllers/poseController');

// Connect to DB
const pool = require('../../config/db');

// @route    GET /api/pose
// @desc     GET all pose
// @access   Public
router.get('/', getAllPose);

// @route    POST /api/pose
// @desc     ADD pose to database
// @access   Private
router.post('/', auth, addPose);


// @route    POST /api/pose
// @desc     ADD pose to database
// @access   Private
router.post('/note', auth, addNote);

module.exports = router;
