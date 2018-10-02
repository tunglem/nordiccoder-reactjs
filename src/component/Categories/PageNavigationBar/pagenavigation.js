import React, { Component } from 'react';
import '../assets/styles/categories_styles.css';
import '../assets/styles/categories_responsive.css';
import Pagging from './pagging'

class PageNavigationBar extends Component {
  render() {
    return (
      <React.Fragment>
        <span className="showing_results">Showing 1–3 of 12 results</span>
        <div className="pages d-flex flex-row align-items-center">
          <Pagging />
        </div>
      </React.Fragment >

    );
  }
}

export default PageNavigationBar;
