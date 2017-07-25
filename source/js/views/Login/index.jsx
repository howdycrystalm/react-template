import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';
import facebook from '../../../assets/icons/facebook.svg';
import google from '../../../assets/icons/google.svg';
import twitter from '../../../assets/icons/twitter.svg';

export default class Login extends Component {
	render() {
	return (
		<div className='Login'>
			<h1>Login</h1>

			<div className="Form Form-login">
				<form action="/login" method="post">
					<div className="form-group">
						<input type="text" className="form-control" name="email" placeholder="Email" />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" name="password" placeholder="Password" />
					</div>
					<button type="submit" id="login-btn" className="button">Log In</button>
				</form>
			</div>

			<div className="oAuth-group">
				<img className="oAuth-group-icon" src={ facebook } />
				<img className="oAuth-group-icon" src={ google } />
				<img className="oAuth-group-icon" src={ twitter } />
			</div>

			<div className="wrapper">
				<p className="wrapper">Don't have an account?</p>
				<a href="/signup" className="login-btn-link"><div className="button">Sign up</div></a>
			</div>

		</div>
	)
	}
}
