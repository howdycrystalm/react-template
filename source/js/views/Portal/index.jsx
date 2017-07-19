import React, { Component } from 'react';

export default class Portal extends Component {
  render() {
    return (
      <div className='Portal'>
        <h1>My Portal</h1>
        <SquareBox boxTitle='Log in / Sign up'
        		   imgSrc='../assets/icons/profile.svg'
        />
        <SquareBox boxTitle='Find a Court Case'
        		   imgSrc='../assets/icons/search.svg'
        />
      </div>
    );
  }
}
