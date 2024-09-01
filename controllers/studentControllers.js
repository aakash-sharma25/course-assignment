// controllers/studentController.js
const Student = require('../model/studentSchema');

// Get student's enrolled courses
exports.getStudentDashboard = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('enrolledCourses.course');
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student.enrolledCourses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mark course as completed
exports.markCourseCompleted = async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const course = student.enrolledCourses.id(req.params.courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    course.progress = 100; // Mark as completed
    await student.save();

    res.json({ message: 'Course marked as completed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
