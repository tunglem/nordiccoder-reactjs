import React, { Component } from 'react';
import '../assets/styles/categories_styles.css';
import '../assets/styles/categories_responsive.css';

class FilterByName extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidebar_section">
          <div className="sidebar_title">
            <h5>Product Category</h5>
          </div>
          <ul className="sidebar_categories">
            <li>
              <a href="">Men</a>
            </li>

            <li className="active">
              <a href="">
                <span>
                  <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                </span>Women
        </a>
            </li >

            <li>
              <a href="">Accessories</a>
            </li>
            <li>
              <a href="">New Arrivals</a>
            </li>

            <li>
              <a href="">Collection</a>
            </li>

            <li>
              <a href="">shop</a>
            </li>
          </ul>
        </div>
      </React.Fragment >

    );
  }
}

export default FilterByName;
