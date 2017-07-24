import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SquareBox extends Component {
	render() {
		return (
			<div className="Box Square-box col-2">
				<div className="Square-box-static module">
					<div className="Square-box-static-main">
						<h3>{this.props.boxTitle}</h3>
						<img src={this.props.imgSrc} />
					</div>
					<div className="Square-box-static-links">
						<p>{this.props.boxContent}</p>
					</div>
				</div>
			</div>
			)
	}
} 

// how to manage icons? 
// <Icon />{this.props.glyph} 
// div needs to be a link to the /page => "/smallclaims" 