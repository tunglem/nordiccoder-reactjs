import React, { Component } from 'react';
import '../assets/styles/categories_styles.css';
import '../assets/styles/categories_responsive.css';

class PerPage extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="product_sorting">
          <li>
            <span>Show:</span>
            <span className="num_sorting_text">04</span>
            <i className="fa fa-angle-down"></i>
            <ul className="sorting_num">
              <li className="num_sorting_btn">
                <span>01</span>
              </li>
              <li className="num_sorting_btn">
                <span>02</span>
              </li>
              <li className="num_sorting_btn">
                <span>03</span>
              </li>
              <li className="num_sorting_btn">
                <span>04</span>
              </li>
            </ul>
          </li>
        </ul>
      </React.Fragment >

    );
  }
}

export default PerPage;
