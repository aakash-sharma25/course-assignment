import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import axios from "axios";

export default function HomePage() {
  const [courses, setCourses] = useState([]);
  const fetchCourse = async () => {
    const { data } = await axios.get("/api/course");
    console.log(data);
    setCourses(data);
  };

  useEffect(() => {
    fetchCourse();
  }, []);
  return (
    <>
      <div>
        <p className=" text-center text-lg font-bold">All courses</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </>
  );
}
