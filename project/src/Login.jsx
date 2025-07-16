import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return(	<div>
				<div className="container">
					<div className="card">
						<h1>Welcome to CourseZone</h1>
						<p>Select your role to continue</p>
						<div className="roles">
							<Link to='/user-login'>
								<button className="role user">
									<img src="https://img.icons8.com/?size=100&id=13042&format=png&color=000000" alt="User Icon" />
									<span>User</span>
								</button>
							</Link>
							<Link to='/admin-login'>
								<button className="role admin">
									<img src="https://img.icons8.com/?size=100&id=23280&format=png&color=000000" alt="Admin Icon" />
									<span>Admin</span>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
	);
}

export default Login