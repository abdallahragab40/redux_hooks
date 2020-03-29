import React, { Component } from "react";
import { connect } from "react-redux";

import _ from "lodash";

import Categories from "./categories";
import Filters from "./filters";
import ProductItem from "./product-item";
import { Link } from "react-router-dom";
import Pagination from "./pagination";

class ProductListing extends Component {
  render() {
    // Filter
    let filteredProducts = this.props.products;
    if (this.props.activeFilter)
      filteredProducts = this.props.products.filter(
        product => product.typeId === this.props.activeFilter
      );
    else {
      filteredProducts = this.props.products.filter(prod => {
        return prod.title.toLowerCase().indexOf(this.props.search) !== -1;
      });
    }

    // Sort
    const sorted = _.orderBy(
      filteredProducts,
      [this.props.sort.path],
      [this.props.sort.order]
    );

    // Pagination
    const startIndex = (this.props.activePage - 1) * this.props.pageSize;
    const showedProducts = _(sorted)
      .slice(startIndex)
      .take(this.props.pageSize)
      .value();
    return (
      <React.Fragment>
        <div class="container">
          <section className="filters">
            {/* search box */}
            <div className="search-box">
              <input
                onChange={this.props.onSearch}
                className="search-box__input"
                placeholder="Search..."
                type="text"
                name="txt_search"
                id
              />
              <button type="submit" className="search-box__btn">
                <i className="fas fa-search" />
              </button>
            </div>
            {/* <Categories></Categories> */}
            <Filters
              activeFilter={this.props.activeFilter}
              types={this.props.types}
              onFilterChange={this.props.onFilterChange}
            />
          </section>

          {/* sort */}

          <section className="item-listing">
            <div className="item-listing__tools">
              {/* <select className="form-control" name id>
                <option value={1}>Featured</option>
                <option onClick={() => this.props.onSort("price")} value={2}>
                  Price low to high
                </option>
                <option onClick={() => this.props.onSort("price")} value={3}>
                  Price high to low
                </option>
                <option onClick={() => this.props.onSort("title")} value={4}>
                  Name
                </option>
              </select> */}
              <button
                onClick={() => this.props.onSort("title")}
                className="btn btn-primary m-2"
              >
                Sort by Name
              </button>
              {/* <button
                onClick={() => this.props.onSort(this.props.products.price)}
                className="btn btn-primary m-2"
              >
                Sort by Price high to low
              </button>
              <button
                onClick={() => this.props.onSort("low price")}
                className="btn btn-primary m-2"
              >
                Sort by Price low to high
              </button> */}

              <Link className="action-btn" to="/add-product">
                <i className="fas fa-plus" />
              </Link>
            </div>
            {/* items */}
            <div className="item-listing__items item-listing--3items">
              {/* {this.props.products.map(product => (
                <ProductItem
                  key={product.id}
                  onItemAdding={this.props.handleAdding}
                  product={product}
                ></ProductItem>
              ))} */}
              {showedProducts.map(product => (
                <ProductItem
                  key={product.id}
                  onItemAdding={this.props.handleAdding}
                  product={product}
                ></ProductItem>
              ))}
            </div>
            {filteredProducts.length > this.props.pageSize && (
              <Pagination
                activePage={this.props.activePage}
                pageCount={filteredProducts.length / this.props.pageSize}
                onPageChange={this.props.onPageChange}
              />
            )}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     products: state.products.items
//   };
// };
// export default connect(mapStateToProps)(ProductListing);

export default ProductListing;
