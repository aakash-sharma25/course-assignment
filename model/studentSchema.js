// models/studentModel.js
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  enrolledCourses: [
    {
      course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
      progress: { type: Number, default: 0 },
    },
  ],
});

module.exports = mongoose.model("Student", StudentSchema);
