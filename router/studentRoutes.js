// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const { getStudentDashboard, markCourseCompleted, buyCourse } = require('../controllers/studentControllers');

router.get('/:id/dashboard', getStudentDashboard);
router.post('/buy', buyCourse);
router.post('/:studentId/courses/:courseId/complete', markCourseCompleted);

module.exports = router;
