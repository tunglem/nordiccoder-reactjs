import React, { Component } from 'react';
// import product_1 from './assets/images/product_1.png'
// import product_2 from './assets/images/product_2.png'
// import product_3 from './assets/images/product_3.png'
// import product_4 from './assets/images/product_4.png'
// import product_5 from './assets/images/product_5.png'
// import product_6 from './assets/images/product_6.png'
// import product_7 from './assets/images/product_7.png'
// import product_8 from './assets/images/product_8.png'
// import product_9 from './assets/images/product_9.png'
// import product_10 from './assets/images/product_10.png'
import './assets/css/index.css'
import Products from './include/products'
import Categories from './include/categories'

class NewArrivals extends Component {

   constructor(props) {
      super(props)
      this.state = {
         categories: [],
         products: [],
         active: 'all',
         isLoadingCategories: false,
         isLoadingProducts: false
      }
      this.Progress = []
   }

   componentDidMount() {
      ///Get all product
      fetch('http://api.demo.nordiccoder.com/api/products')
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
   onFilterByCategoriesAll = () => {
      // console.log('eeeeeee');
      // fetch('http://api.demo.nordiccoder.com/api/products')
      //    .then((response) => {
      //       return response.json();
      //    })
      //    .then((data) => {
      //       if (data.header.status === 200) {
      //          this.setState({
      //             products: data.body,
      //             filters: data.body,
      //             isLoadingProducts: true,
      //             active: "all"
      //          })
      //       }
      //    })
      console.log('asddasd')
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
                              className=' grid_sorting_button button d-flex flex-column justify-content-center align-items-center'
                              data-filter="*"
                              onClick={this.onFilterByCategoriesAll}
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
         </div>
      );
   }
}

export default NewArrivals;
