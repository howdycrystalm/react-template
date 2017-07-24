import React, { Component } from 'react';
import SquareBox from '../../components/Global/SquareBox';
import { Link } from 'react-router-dom';
import { routeCodes } from '../../views/App';

export default class Portal extends Component {
  render() {
    return (
      <div className='Portal'>
        <h1>My Portal</h1>
        <SquareBox boxTitle='Log in / Sign up'
        		   imgSrc='../assets/icons/profile.svg'
               url={ routeCodes.LOGIN }
        />
        <SquareBox boxTitle='Find a Court Case'
        		   imgSrc='../assets/icons/search.svg'
        />
      </div>
    );
  }
}
