import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';
import facebook from '../../../assets/icons/facebook.svg';
import google from '../../../assets/icons/google.svg';
import twitter from '../../../assets/icons/twitter.svg';

export default class Signup extends Component {
	render() {
	return (
		<div className='Signup'>
			<h1>Signup</h1>

			<div className="Form Form-signup">
				<form action="/signup" method="post">
					<div className="form-group">
						<input type="text" className="form-control" name="email" placeholder="Email" />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" name="phone" placeholder="Phone" />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" name="password" placeholder="Password" />
					</div>
					<button type="submit" id="login-btn" className="button">Sign Up</button>
				</form>
			</div>

			<div className="oAuth-group">
				<img className="oAuth-group-icon" src={ facebook } />
				<img className="oAuth-group-icon" src={ google } />
				<img className="oAuth-group-icon" src={ twitter } />
			</div>

			<div className="wrapper">
				<p className="wrapper">Already have an account?</p>
				<a href="/signup" className="login-btn-link"><div className="button">Log In</div></a>
			</div>

		</div>
	)
	}
}
