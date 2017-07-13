import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <h1>Contact</h1>

        <div className='Contact-form'>
          <form id='contactForm'>
            <div id='nameGroup'>
              <label>* Name</label>
              <input id='fullname' placeholder='Enter your first and last name' />
            </div>
            <div id='emailGroup'>
              <label>* Email</label>
              <input id='email' placeholder='Enter your email address' />
            </div>
            <div id='departmentGroup'>
              <label>* Department / Category</label>
              <select id='department'>
                <option value='feedback'>General Feedback / Suggestions</option>
                <option value='jury'>Jury Service-Related Questions</option>
                <option value='traffic'>Traffic-Related Questions (citations, fines, etc.)</option>
                <option value='outreach'>Community Outreach Questions</option>
                <option value='technical'>Technical Problem</option>
                <option value='content'>Report Incorrect Content</option>
                <option value='court-info'>Other</option>
              </select>
            </div>
            <div id='commentsGroup'>
              <label>* Comments</label>
              <textarea id='comments' placeholder='Enter your message here...'></textarea>
            </div>
            <div id='required'>*Required fields</div>
            <button id="submitContactForm">Submit</button>
          </form>
        </div>

        <div className="General-info">
          <h3>General Information</h3>
          <li><a href='http://www.cc-courthelp.org/general/court-phone.aspx'>Phone Directory</a></li>
          <li><a href='http://www.cc-courthelp.org/locations/locations.aspx'>Court Locations</a></li>
          <li><a href='http://www.cc-courthelp.org/general/holidays.aspx'>Court Holiday Schedule</a></li>
        </div>
      </div>
    );
  }
}
