// routes/courseRoutes.js
const express = require('express');
const { getAllCourses, getCourseById, addCourse } = require('../controllers/courseController');
const router = express.Router();

router.get('/', getAllCourses);
router.post('/add', addCourse);
router.get('/:id', getCourseById);

module.exports = router;
