const express = require("express");
const courseRoutes = require("./router/courseRoutes");
const studentRoutes = require("./router/studentRoutes");

const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

dbConnect();

// app.use("/api/auth", authRoutes);
app.use("/api/student",studentRoutes );
app.use("/api/course",courseRoutes );

// app.use(express.static(path.join(__dirname, "./client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/dist/index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
