import React, { Component } from "react";
import PropTypes from 'prop-types';

// import './ProductCard.css';

export default class ProductCard extends Component {


  render() {
    const { product } = this.props;
    const isSale = product.salePrice < product.originalPrice;
    const sale = product.originalPrice - product.salePrice
    const originalPrice = isSale && <span>${product.originalPrice}</span>;

    return (
      <div className="product-item">
        <div className="product discount product_filter">
          <div className="product_image">
            <img src={`${product.image}`} alt={product.name} />
          </div>

          <div className="favorite favorite_left"></div>
          {isSale == true && (
            <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
              <span>-${sale}</span>
            </div>
          )}
          {isSale == false && (
            <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
              <span>NEW</span>
            </div>
          )}

          <div className="product_info">
            <h6 className="product_name">
              <a >{product.name})</a>
            </h6>
            <div className="product_price"> ${product.salePrice}${originalPrice}
            </div>
          </div>
        </div>
        <div className="red_button add_to_cart_button">
          <a href="#">add to cart</a>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

ProductCard.defaultProps = {};
