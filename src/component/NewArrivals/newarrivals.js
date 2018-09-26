import React, { Component } from 'react';
import './assets/css/index.css'
import Products from './include/products'
import Categories from './include/categories'

const grid_sorting_button_temp = {
   height: '40px',
   minWidth: '102px',
   paddingLeft: '25px',
   paddingRight: '25px',
   cursor: 'pointer',
   border: 'solid 1px #ebebeb',
   fontSize: '14px',
   fontWeight: '500',
   textTransform: 'uppercase',
   background: '#FFFFFF',
   borderRadius: '3px',
   margin: '0',
   float: 'left',
   marginLeft: '- 1px',
   color: '#FFFFFF',

}

class NewArrivals extends Component {

   constructor(props) {
      super(props)
      this.state = {
         categories: [],
         products: [],
         active: 'all',
         totalProduct: "",
         isLoadingCategories: false,
         isLoadingProducts: false
      }
      this.Progress = []
   }


   componentDidMount() {
      ///Get all product
      var linkfilter = "";
      fetch('http://api.demo.nordiccoder.com/api/products/count')
         .then((response) => {
            return response.json();
         })
         .then((data) => {
            if (data.header.status === 200) {
               const countProduct = data.body;
               linkfilter = '{"limit":"' + countProduct.count + '"}';
               this.setState({
                  totalProduct: encodeURIComponent(linkfilter)
               })
               fetch('http://api.demo.nordiccoder.com/api/products?filter=' + this.state.totalProduct)
                  .then((response) => {
                     return response.json();
                  })
                  .then((data) => {
                     if (data.header.status === 200) {
                        this.setState({
                           products: data.body,
                           filters: data.body,
                           isLoadingProducts: true
                        })
                     }
                  })
            }
         })
      /// Get categories
      fetch('http://api.demo.nordiccoder.com/api/categories')
         .then((response) => {
            return response.json();
         })
         .then((data) => {
            if (data.header.status === 200) {
               this.setState({
                  categories: data.body,
                  isLoadingCategories: true
               })
            }
         })
   }

   _onFilterByCategories = (name = '', id = '') => {
      console.log('sdsdsds')
      if (id !== '') {
         fetch('http://api.demo.nordiccoder.com/api/categories/' + id + '/products')
            .then((response) => {
               return response.json();
            })
            .then((data) => {
               console.log(name)
               if (data.header.status === 200) {
                  this.setState({
                     products: data.body,
                     filters: data.body,
                     isLoadingProducts: true,
                     active: name
                  })
               }
            })
      } else {
         fetch('http://api.demo.nordiccoder.com/api/products?filter=' + this.state.totalProduct)
            .then((response) => {
               return response.json();
            })
            .then((data) => {
               if (data.header.status === 200) {
                  this.setState({
                     products: data.body,
                     filters: data.body,
                     isLoadingProducts: true,
                     active: "all"
                  })
               }
            })
      }
   }

   _onRenderCategories = () => {
      const { categories } = this.state
      let result = ''
      result = categories.map((r, i) => {
         if (i <= 2) {
            return (
               <Categories
                  key={i}
                  id={r.id}
                  name={r.name}
                  iconName={r.iconName}
                  active={r.name}
                  isactive={this.state.active}
                  _onFilterByCategories={this._onFilterByCategories}
               />
            )
         }
      })
      return result
   }

   _onRenderProduct = () => {
      const { products } = this.state
      let result = ''
      result = products.map((r, i) => {
         return (
            <Products
               key={i}
               value={r.id}
               name={r.name}
               image={r.image}
               thumbnail={r.thumbnail}
               shortDescription={r.shortDescription}
               salePrice={r.salePrice}
               originalPrice={r.originalPrice}
            />
         )
      })
      return result
   }
   render() {
      return (
         <div className="new_arrivals">
            <div className="container">
               <div className="row">
                  <div className="col text-center">
                     <div className="section_title new_arrivals_title">
                        <h2>New Arrivals</h2>
                     </div>
                  </div>
               </div>
               <div className="row align-items-center">
                  <div className="col text-center">
                     <div className="new_arrivals_sorting">
                        <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                           <li
                              className='button d-flex flex-column justify-content-center align-items-center'
                              onClick={() => this._onFilterByCategories()}
                              style={this.state.active === 'all' ? { ...grid_sorting_button_temp, background: 'red', color: 'white' } : { ...grid_sorting_button_temp, background: 'white', color: 'black' }}
                           >
                              All
                           </li>
                           {this._onRenderCategories()}
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {this._onRenderProduct()}
               </div>
            </div>
         </div >
      );
   }
}

export default NewArrivals;
