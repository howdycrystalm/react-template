import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InfoBox extends Component {
	render() {
		return (
			<div className="Box Info-box">
				<h3>{this.props.boxTitle}</h3>
				<hr />
				<div>{this.props.boxContent}</div>
				<button>{this.props.buttonText}</button>
			</div>
			)
	}
} 

/// going to want to iterate over the box content for info box to render full list of options (or first 5)