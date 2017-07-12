import React, { Component } from 'react';


export default class Search extends Component {
  render() {
    return (
      <div className='Search'>
        <input className='Search-bar' placeholder='What can we help you find?' />

        <button>
        Search
        </button>
      </div>
    );
  }
}
