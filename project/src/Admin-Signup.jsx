import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './User-Signup.css';

function AdminSignup() {
  const [formData, setFormData] = useState({
	name: '',
	age: '',
	email: '',
	password: ''
  });

  const handleChange = (e) => {
	const { name, value } = e.target;
	setFormData((prev) => ({
	  ...prev,
	  [name]: value
	}));
	console.log(e.target)
  };

  const handleSubmit = (e) => {
	e.preventDefault();
	console.log('Signing up with:', formData);
  };

  return (
	<div className="signup-container">
	  <form className="signup-box" onSubmit={handleSubmit}>
		<h2>Create Account</h2>

		<div className="input-group">
		  <label htmlFor="name">Name</label>
		  <input
			type="text"
			id="name"
			name="name"
			placeholder="Enter your name"
			value={formData.name}
			onChange={handleChange}
			required
		  />
		</div>

		<div className="input-group">
		  <label htmlFor="age">Age</label>
		  <input
			type="number"
			id="age"
			name="age"
			placeholder="Enter your age"
			value={formData.age}
			onChange={handleChange}
			required
		  />
		</div>

		<div className="input-group">
		  <label htmlFor="email">Email</label>
		  <input
			type="email"
			id="email"
			name="email"
			placeholder="Enter your email"
			value={formData.email}
			onChange={handleChange}
			required
		  />
		</div>

		<div className="input-group">
		  <label htmlFor="password">Password</label>
		  <input
			type="password"
			id="password"
			name="password"
			placeholder="Create a password"
			value={formData.password}
			onChange={handleChange}
			required
		  />
		</div>
		<Link to='/admin-login'>
			<button type="submit">Sign Up</button>
		</Link>
		<p className="login-text">
		  Already have an account? <Link to="/admin-login">Log in</Link>
		</p>
	  </form>
	</div>
  );
}

export default AdminSignup;
