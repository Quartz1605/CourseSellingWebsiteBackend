import React, { useState, useEffect } from "react";
import "./Admin-Course-Form.css";

const CourseForm = ({ course, onSave, onClose }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (course) setForm(course);
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, id: course?.id });
  };

  return (
    <div className="form-backdrop">
      <form className="course-form" onSubmit={handleSubmit}>
        <h3>{course ? "Edit Course" : "Add New Course"}</h3>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Course Title"
          required
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Short Description"
          required
        />
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <div className="form-actions">
          <button type="submit">💾 Save</button>
          <button type="button" onClick={onClose}>
            ❌ Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
