import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Box extends Component {
	render() {
		return (
			<div className="Box">
				<h3>{this.props.boxTitle}</h3>
				<img src={this.props.imgSrc} />
				<p>{this.props.boxContent}</p>
			</div>
			)
	}
} 

// how to manage icons? 
// <Icon />{this.props.glyph}