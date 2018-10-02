import React, { Component } from 'react';
import _ from 'lodash';
// import './assets/plugins/jquery-ui-1.12.1.custom/jquery-ui.css'
import './assets/styles/categories_styles.css'
import './assets/styles/categories_responsive.css'
import FilterByName from './FilterByName/filterbyname'
import FilterByPrice from './FilterByPrice/filterbyprice'
import PageNavigationBar from './PageNavigationBar/pagenavigation'
import PerPage from './PerPageDropdown/perpage'
import SortingDropdown from './SortingDropDown/sortingdropdown'
import productsList from '../../data/products';
import categories from '../../data/categories';
import ProductCategories from './ProductCategories/productcategories'

class Categories extends Component {

  constructor(props) {
    super(props);

    // Init mock data
    this.categories = [
      {
        id: 'all',
        name: 'all',
      },
      ...categories
    ];

    // Init state
    this.state = {
      filteredProducts: productsList,
    };

    this.handleSelectedCategoryChanged = this.handleSelectedCategoryChanged.bind(this);
  }
  handleSelectedCategoryChanged(category) {
    if (!category || !category.id) return;
    const filteredProducts =
      category.id === 'all' ? productsList : _.filter(productsList, { categoryId: category.id });
    this.setState({ filteredProducts });
  }

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
              <FilterByName
                categories={this.categories}
                defaultCategoryId={this.categories[0].id}
                onSelectedOptionChanged={this.handleSelectedCategoryChanged}
              />
              <FilterByPrice />
            </div>
            <div className="main_content">
              <div className="products_iso">
                <ProductCategories productsList={this.state.filteredProducts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
