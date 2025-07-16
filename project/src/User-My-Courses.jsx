import React from "react";
import "./User-My-Courses.css";

const enrolledCourses = [
  {
    id: 1,
    title: "Cohort 3.0 | Web Dev",
    image: "https://source.unsplash.com/400x250/?web,developer",
    progress: 35,
  },
  {
    id: 2,
    title: "DSA Mastery",
    image: "https://source.unsplash.com/400x250/?algorithms,code",
    progress: 60,
  },
  {
    id: 3,
    title: "AI & ML Bootcamp",
    image: "https://source.unsplash.com/400x250/?ai,machinelearning",
    progress: 45,
  },
];

const MyCourses = () => {
  return (
    <div className="my-courses-page">
      <h2>📚 My Courses</h2>
      <div className="my-courses-grid">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="my-course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>Progress: {course.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
