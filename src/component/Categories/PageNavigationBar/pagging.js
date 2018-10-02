import React, { Component } from 'react';
import '../assets/styles/categories_styles.css';
import '../assets/styles/categories_responsive.css';

class Pagging extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page_current">
          <span>1</span>
          <ul className="page_selection">
            <li>
              <a href="">1</a>
            </li>
            <li>
              <a href="">2</a>
            </li>
            <li>
              <a href="">3</a>
            </li>
          </ul>
        </div>
        <div className="page_total">
          <span>of</span> 3
          </div>
        <div id="next_page_1" className="page_next">
          <a href="">
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </React.Fragment >

    );
  }
}

export default Pagging;
