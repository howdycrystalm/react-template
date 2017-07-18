import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SquareBox extends Component {
	render() {
		return (
			<div className="Box Square-box col-2">
				<div className="module">
					<h3>{this.props.boxTitle}</h3>
					<img src={this.props.imgSrc} />
					<p>{this.props.boxContent}</p>
				</div>
			</div>
			)
	}
} 

// how to manage icons? 
// <Icon />{this.props.glyph}  