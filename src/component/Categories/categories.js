import React, { Component } from 'react';
// import './assets/plugins/jquery-ui-1.12.1.custom/jquery-ui.css'
import './assets/styles/categories_styles.css'
import './assets/styles/categories_responsive.css'
import FilterByName from './FilterByName/filterbyname'
import FilterByPrice from './FilterByPrice/filterbyprice'
import PageNavigationBar from './PageNavigationBar/pagenavigation'
import PerPage from './PerPageDropdown/perpage'
import SortingDropdown from './SortingDropDown/sortingdropdown'

class Categories extends Component {
  render() {
    return (
      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">
            <div className="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">
                  <a href="/">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>Men's
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar">
              <FilterByName />
              <FilterByPrice />
            </div>
            <div className="main_content">
              <div className="products_iso">
                <div className="row">
                  <div className="col">
                    <SortingDropdown />
                    <div className="product-grid">
                      <div className="product-item men">
                        <div className="product discount product_filter">
                          <div className="product_image">
                            <img src="images/product_1.png" alt="" />
                          </div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                            <span>-$20</span>
                          </div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a>
                            </h6>
                            <div className="product_price">$520.00<span>$590.00</span>
                            </div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button">
                          <a href="">add to cart</a>
                        </div>
                      </div>
                      <div className="product-item women">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src="images/product_2.png" alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
                            <span>new</span>
                          </div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">Samsung CF591 Series Curved 27-Inch FHD Monitor</a>
                            </h6>
                            <div className="product_price">$610.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button">
                          <a href="">add to cart</a>
                        </div>
                      </div>
                      <div className="product-item women">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src="images/product_3.png" alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">Blue Yeti USB Microphone Blackout Edition</a>
                            </h6>
                            <div className="product_price">$120.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button">
                          <a href="">add to cart</a>
                        </div>
                      </div>
                      <div className="product-item accessories">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src="images/product_4.png" alt="" />
                          </div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                            <span>sale</span>
                          </div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">DYMO LabelWriter 450 Turbo Thermal Label Printer</a>
                            </h6>
                            <div className="product_price">$410.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button">
                          <a href="">add to cart</a>
                        </div>
                      </div>
                      <div className="product-item women men">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src="images/product_5.png" alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">Pryma Headphones, Rose Gold & Grey</a>
                            </h6>
                            <div className="product_price">$180.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button">
                          <a href="">add to cart</a>
                        </div>
                      </div>
                      <div className="product-item accessories">
                        <div className="product discount product_filter">
                          <div className="product_image">
                            <img src="images/product_6.png" alt="" />
                          </div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                            <span>-$20</span>
                          </div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a>
                            </h6>
                            <div className="product_price">$520.00<span>$590.00</span>
                            </div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button">
                          <a href="">add to cart</a>
                        </div>
                      </div>
                      <div className="product-item women">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src="images/product_7.png" alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">Samsung CF591 Series Curved 27-Inch FHD Monitor</a>
                            </h6>
                            <div className="product_price">$610.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button">
                          <a href="">add to cart</a>
                        </div>
                      </div>
                      <div className="product-item accessories">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src="images/product_8.png" alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">Blue Yeti USB Microphone Blackout Edition</a>
                            </h6>
                            <div className="product_price">$120.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button">
                          <a href="">add to cart</a>
                        </div>
                      </div>
                      <div className="product-item men">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src="images/product_9.png" alt="" />
                          </div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                            <span>sale</span>
                          </div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">DYMO LabelWriter 450 Turbo Thermal Label Printer</a>
                            </h6>
                            <div className="product_price">$410.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button">
                          <a href="">add to cart</a>
                        </div>
                      </div>
                      <div className="product-item men">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src="images/product_10.png" alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">Pryma Headphones, Rose Gold & Grey</a>
                            </h6>
                            <div className="product_price">$180.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button">
                          <a href="">add to cart</a>
                        </div>
                      </div>
                      <div className="product-item women men">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src="images/product_5.png" alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">Pryma Headphones, Rose Gold & Grey</a>
                            </h6>
                            <div className="product_price">$180.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button">
                          <a href="">add to cart</a>
                        </div>
                      </div>
                      <div className="product-item accessories">
                        <div className="product discount product_filter">
                          <div className="product_image">
                            <img src="images/product_6.png" alt="" />
                          </div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                            <span>-$20</span>
                          </div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a>
                            </h6>
                            <div className="product_price">$520.00
                          <span>$590.00</span>
                            </div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button">
                          <a href="">add to cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="product_sorting_container product_sorting_container_bottom clearfix">
                      <PerPage />
                      <PageNavigationBar />
                    </div>
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

export default Categories;
