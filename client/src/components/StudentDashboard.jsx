import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);
  const { id } = useParams();
  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(`/api/student/${id}/dashboard`);
      setCourses(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleCompleteCourse = async (courseId) => {
    try {
      await axios.post(`/api/student/${id}/courses/${courseId}/complete`);
      fetchUserData();
    } catch (error) {
      console.error("Error marking course as complete:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4">Your Enrolled Courses</h2>
      {courses.length === 0 ? (
        <p className="text-gray-700">
          You have not enrolled in any courses yet.
        </p>
      ) : (
        <div className="space-y-6">
          {courses.map((course) => (
            <div
              key={course.course.id}
              className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold">{course.course.name}</h3>
                <p className="text-gray-700">
                  Instructor: {course.course.instructor}
                </p>
                <p className="text-gray-700">Progress: {course.progress}% </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 my-2">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              <div>
                {course.progress !== 100 && (
                  <button
                    className="text-white bg-green-500 px-4 py-2 rounded-lg focus:outline-none"
                    onClick={() => handleCompleteCourse(course._id)}
                    // onClick={()=>console.log(course)}
                  >
                    Mark as Complete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
