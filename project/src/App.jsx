import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login.jsx'
import UserLogin from './User-Login.jsx'
import UserSignup from './User-Signup.jsx'
import AdminLogin from './Admin-Login.jsx'
import AdminSignup from './Admin-Signup.jsx';
import UserCourses from './User-Courses.jsx';
import NavBar from './Nav-Bar.jsx';
import MyCourses from './User-My-Courses.jsx';
import AdminCourses from './Admin-Courses.jsx';
import CourseForm from './Admin-Course-Form.jsx';

function App() {

    return(<Router>
        
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/user-courses" element={<UserCourses />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/admin-courses" element={<AdminCourses />} />
        <Route path="/add-course" element={<CourseForm />} />

      </Routes>
    </Router>);
}

export default App