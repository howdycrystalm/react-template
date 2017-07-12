import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from '../../views/App';
import ccscLogo from '../../../assets/img/ccsc-logo.svg';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <div className='Menu-logo'>
          <img
            src={ ccscLogo }
            alt='Contra Costa Superior Courts logo'
          />
        </div>
        <div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to={ routeCodes.DASHBOARD }
          >
            Home
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.ABOUT }
          >
            About
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='404'
          >
            404
          </NavLink>
        </div>
      </div>
    );
  }
}
