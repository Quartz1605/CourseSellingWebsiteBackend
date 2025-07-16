import React from "react";
import "./User-Courses.css";
import NavBar from "./Nav-Bar";

const UserCourses = () => {
  const courses = [
    {
      id: 1,
      title: "AI ML",
      subtitle: "Neural Networks · Deep Learning · Model Training",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/9/YA/FN/SK/83343488/artificial-intelligence-and-machine-learning-training.jpeg",
      progress: 0,
    },
    {
      id: 2,
      title: "DSA ",
      subtitle: "Stacks · Trees · Graphs · Competitive Coding",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20221114175057/10BestDataStructuresandAlgorithmsCourses.png",
      progress: 0,
    },
    {
      id: 3,
      title: "Web Dev",
      subtitle: "Web development · Projects · Open Source",
      image: "https://www.classcentral.com/report/wp-content/uploads/2022/04/BCG-Web-Development-NEW-Banner.png",
      progress: 35,
    },
  ];

  return (<>
    <NavBar/>
    <div className="cards-container">
      {courses.map((course) => (
        <div className="course-card" key={course.id}>
          <div className="card-img-wrapper">
            <img src={course.image} alt={course.title} className="card-img" />
            <div className="progress-badge">{course.progress}%</div>
          </div>
          <div className="card-body">
            <h2 className="card-title">{course.title}</h2>
            {course.subtitle && (
              <p className="card-subtitle">{course.subtitle}</p>
            )}
            <div className="card-actions">
              <button className="view-btn">👁 View Course</button>
              <button className="discord-btn">💬 Join Discord</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default UserCourses;
