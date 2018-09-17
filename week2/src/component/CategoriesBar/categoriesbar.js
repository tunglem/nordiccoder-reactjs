import React, { Component } from 'react';
// import './App.css';

class CategoriesBar extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="banner_item align-items-center" style={{ backgroundImage: 'url(./assets/images/banner_1.jpg)' }}>
                  <div className="banner_category">
                    <a href="categories.html">women's</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="banner_item align-items-center" style={{ backgroundImage: 'url(./assets/images/banner_2.jpg)' }}>
                  <div className="banner_category">
                    <a href="categories.html">accessories's</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="banner_item align-items-center" style={{ backgroundImage: 'url(./assets/images/banner_3.jpg)' }}>
                  <div className="banner_category">
                    <a href="categories.html">men's</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesBar;
