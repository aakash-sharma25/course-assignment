import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course?.name}</div>
        <p className="text-gray-700 text-base">
          Instructor: {course?.instructor}
        </p>
        <p className="text-gray-700 text-base">
          Status: {course?.status}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          to={`/courses/${course?._id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
