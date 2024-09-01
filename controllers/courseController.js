const Course = require("../model/courseSchema")

// Fetch all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.addCourse = async (req, res) => {
  try {
    const data = req.body;
    const course = await Course.create(data);
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Fetch course details by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
