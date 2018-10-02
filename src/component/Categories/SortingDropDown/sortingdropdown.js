import React, { Component } from 'react';
import '../assets/styles/categories_styles.css';
import '../assets/styles/categories_responsive.css';
import Pagging from '../PageNavigationBar/pagging';

class SortingDropdown extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="product_sorting_container product_sorting_container_top">
          <ul className="product_sorting">
            <li>
              <span className="type_sorting_text">Default Sorting</span>
              <i className="fa fa-angle-down"></i>
              <ul className="sorting_type">
                <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "original-order" }'><span>Default Sorting</span></li>
                <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "price" }'><span>Price</span></li>
                <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "name" }'><span>Product Name</span></li>
              </ul>
            </li>
            <li>
              <span>Show</span>
              <span className="num_sorting_text">6</span>
              <i className="fa fa-angle-down"></i>
              <ul className="sorting_num">
                <li className="num_sorting_btn"><span>6</span></li>
                <li className="num_sorting_btn"><span>12</span></li>
                <li className="num_sorting_btn"><span>24</span></li>
              </ul>
            </li>
          </ul>
          <div className="pages d-flex flex-row align-items-center">
            <Pagging />
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default SortingDropdown;
