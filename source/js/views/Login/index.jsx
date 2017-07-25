import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';

export default class Login extends Component {
	render() {
	return (
		<div className='Login'>
			<h1>Login</h1>

			<div className="Form Form-login">
				<form action="/login" method="post">
					<div className="form-group">
						<label>Email</label>
						<input type="text" className="form-control" name="email" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" name="password" />
					</div>

					<button type="submit" id="login-btn" className="button">Log In</button>
				</form>
			</div>

		</div>
	)
	}
}
