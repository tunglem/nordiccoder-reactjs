import React, { Component } from 'react';
import '../assets/styles/categories_styles.css';
import '../assets/styles/categories_responsive.css';

class FilterByPrice extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidebar_section">
          <div className="sidebar_title">
            <h5>Filter by Price</h5>
          </div>
          <p>
            <input type="text" id="amount" readOnly style={{ 'border': '0', 'color': '#f6931f', 'fontWeight': 'bold' }} />
          </p>
          <div id="slider-range"></div>
          <div className="filter_button">
            <span>filter</span>
          </div>
        </div>
      </React.Fragment >

    );
  }
}

export default FilterByPrice;
