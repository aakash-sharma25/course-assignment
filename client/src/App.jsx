import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import CourseDetail from "./components/CourseDetail";
import StudentDashboard from "./components/StudentDashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses/:id" element={<CourseDetail />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard/:id" element={<StudentDashboard />} />
    </Routes>
  );
}

export default App;
