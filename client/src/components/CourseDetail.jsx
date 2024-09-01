import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const fetchCourse = async () => {
    const { data } = await axios.get("/api/course/" + id);
    setCourse(data);
  };
  const getCourse = async () => {
    
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">{course?.name}</h1>
      <p className="text-gray-700 mb-2">
        <strong>Instructor:</strong> {course?.instructor}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Status:</strong> {course?.status}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Duration:</strong> {course?.duration}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Schedule:</strong> {course?.schedule}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Location:</strong> {course?.location}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Prerequisites:</strong> {course?.prerequisites?.join(", ")}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Description:</strong> {course?.description}
      </p>

      <div className="mb-4">
        <button
          className="text-white bg-green-500 px-4 py-2 rounded-lg focus:outline-none"
          onClick={() => getCourse()}
        >
          Get Course
        </button>
      </div>
      <div className="mb-4">
        <button
          className="text-white bg-blue-500 px-4 py-2 rounded-lg focus:outline-none"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Hide Syllabus" : "Show Syllabus"}
        </button>
      </div>

      {expanded && (
        <div className="bg-gray-100 p-4 rounded-lg">
          {course?.syllabus.map((week, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-xl font-semibold mb-1">
                Week {week?.week}: {week?.topic}
              </h2>
              <p className="text-gray-700">{week?.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
