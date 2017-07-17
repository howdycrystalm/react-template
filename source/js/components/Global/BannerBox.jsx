import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BannerBox extends Component {
	render() {
		return (
			<div className="Box Banner-box">
				<h2>{this.props.boxTitle}</h2>
				<hr />
				<p>{this.props.boxContent}</p>
				<button>{this.props.buttonText}</button>
			</div>
			)
	}
} 

/// figure out how to pass proptypes to h2, p and button html inner text
