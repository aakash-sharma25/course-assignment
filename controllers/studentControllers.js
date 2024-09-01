// controllers/studentController.js
const Student = require("../model/studentSchema");

// Get student's enrolled courses
exports.getStudentDashboard = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate(
      "enrolledCourses.course"
    );
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student.enrolledCourses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.buyCourse = async (req, res) => {
  try {
    const { courseId, studentId } = req.body;
    const student = await Student.findById(studentId);
    console.log(studentId, student);
    if (!student) return res.status(404).json({ message: "Student not found" });
    student.enrolledCourses.push({
      course: courseId,
    });
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mark course as completed
exports.markCourseCompleted = async (req, res) => {
  try {
    console.log(req.params.studentId, req.params.courseId);
    const student = await Student.findById(req.params.studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    const course = student.enrolledCourses.filter(
      (c) => c._id == req.params.courseId
    );
    if (!course) return res.status(404).json({ message: "Course not found" });
    console.log(course);
    course[0].progress = 100; // Mark as completed
    await student.save();

    res.json({ message: "Course marked as completed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
