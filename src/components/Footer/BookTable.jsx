import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const BookTable = () => (
  <div className="app__bookTable" id='bookTab'>
    <div className="app__newsletter-heading">
      <h1 className="headtext__cormorant">Book a Table</h1>
    </div>
   
    <div className="app__newsletter-input flex__center">
      <input type="text" placeholder="Enter your Contact  Number" />
      <input type="number" placeholder="Enter Number of guests" />
      <button type="button" className="custom__button">Book</button>
      
    </div>
     
  </div>
);

export default BookTable;
