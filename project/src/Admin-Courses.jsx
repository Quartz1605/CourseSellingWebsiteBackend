import React, { useState } from "react";
import "./Admin-Courses.css";
import CourseForm from "./Admin-Course-Form";

const AdminCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Cohort 3.0 | Web Dev",
      description: "Full-stack development",
      image: "https://source.unsplash.com/400x250/?web,code",
    },
    {
      id: 2,
      title: "DSA Mastery",
      description: "Data Structures & Algorithms",
      image: "https://source.unsplash.com/400x250/?coding,algorithms",
    },
  ]);

  const [editingCourse, setEditingCourse] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAdd = () => {
    setEditingCourse(null);
    setIsFormOpen(true);
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setIsFormOpen(true);
  };

  const handleSave = (course) => {
    if (course.id) {
      setCourses((prev) =>
        prev.map((c) => (c.id === course.id ? course : c))
      );
    } else {
      const newCourse = { ...course, id: Date.now() };
      setCourses((prev) => [...prev, newCourse]);
    }
    setIsFormOpen(false);
  };

  return (
    <div className="admin-dashboard">
      <h2>🎓 Admin Dashboard</h2>
      <button className="add-course-btn" onClick={handleAdd}>
        ➕ Add New Course
      </button>

      <div className="admin-courses">
        {courses.map((course) => (
          <div className="admin-course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button onClick={() => handleEdit(course)}>✏️ Edit</button>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <CourseForm
          course={editingCourse}
          onSave={handleSave}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminCourses;
