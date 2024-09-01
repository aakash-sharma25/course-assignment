// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const { getStudentDashboard, markCourseCompleted } = require('../controllers/studentControllers');

router.get('/:id/dashboard', getStudentDashboard);
router.post('/:studentId/courses/:courseId/complete', markCourseCompleted);

module.exports = router;
