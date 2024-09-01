// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   resumeLink: {
//     type: String,
//     default:""
//   },
// });

// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// module.exports = mongoose.model("User", UserSchema);

// models/courseModel.js
const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instructor: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["Open", "Closed", "In Progress"],
    default: "Open",
  },
  duration: { type: String },
  schedule: { type: String },
  location: { type: String },
  prerequisites: { type: [String] },
  syllabus: [
    {
      week: { type: String },
      topic: { type: String },
      content: { type: String },

    },
  ],
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
});

module.exports = mongoose.model("Course", CourseSchema);
