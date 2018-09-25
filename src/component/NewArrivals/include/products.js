import React from 'react'
import Button from './button'

const Products = (props) => {
  return (
    <div className="product-item col-lg-3 men" style={{ padding: 0 }}>
      <div className="product discount product_filter">
        <div className="product_image">
          <img src={`assets/${props.thumbnail}`} alt="" />
        </div>
        <div className="favorite favorite_left"></div>
        {
          props.salePrice < props.originalPrice ?
            <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
              <span>Sale</span>
            </div> : ""
        }
        <div className="product_info">
          <h6 className="product_name"><a href="single.html">{props.name}</a></h6>
          <div className="product_price">
            {
              props.salePrice < props.originalPrice ? <React.Fragment>{props.salePrice}$ <span>{props.originalPrice}$</span></React.Fragment> : <React.Fragment>{props.originalPrice}</React.Fragment>
            }
          </div>

        </div>
      </div>
      <Button />
    </div>
  )
}

export default Products;
