import React, { Component, useEffect } from "react";
import { Provider, connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import store from "./store";

import "./App.css";
import ProductListing from "./components/products/product-listing";
import ErrorPage from "./components/errorPage";
import addProduct from "./components/addProduct";
import ProductDetail from "./components/productDetail";
import AboutUS from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import Login from "./components/authontication/login";
import Register from "./components/authontication/register";
import Header from "./components/core/header";
import Footer from "./components/core/footer";

import { fetchProducts } from "./actions/productsActions";

class App extends Component {
  state = {
    types: [],
    products: [],
    pageSize: 9,
    activePage: 1,
    activeFilter: 0,
    search: "",
    sort: { path: "title", order: "asc" }
  };

  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => this.setState({ products: data }));
    fetch("http://localhost:3000/types")
      .then(res => res.json())
      .then(data => this.setState({ types: data }));
  }

  onDelete = product => {
    let products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].count--;
    if (products[index].count === 1) {
      products[index].isInCart = false;
    }
    // products[
    //   products.findIndex(prod => prod.name === product.name)
    // ].isInCard = false;
    // products[products.findIndex(prod => prod.name === product.name)].count--;
    this.setState({ products });
  };

  handleAdding = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].isInCard = true;
    products[index].count++;
    this.setState({ products });
  };

  totalPrice = () => {
    return this.state.products
      .map(product => product.count * product.price)
      .reduce((a, b) => a + b, 0);
  };

  handlePageChange = page => {
    this.setState({ activePage: page });
  };

  handleFilterChange = type => {
    this.setState({ activeFilter: type.id, activePage: 1 });
  };

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  handelSort = path => {
    let sort = { ...this.state.sort };
    if (sort.path === path) {
      sort.order = sort.order === "asc" ? "desc" : "asc";
    } else {
      sort.path = path;
      sort.order = "asc";
    }
    this.setState({ sort });
  };

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header
            totalPrice={this.totalPrice}
            products={this.state.products}
            onDelete={this.onDelete}
          ></Header>
          <Switch>
            <Route path="/about-us" component={AboutUS} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/login" render={props => <Login {...props} />} />
            <Route path="/register" component={Register} />
            <Route path="/not-found" exact component={ErrorPage} />
            <Route
              path="/home"
              render={props => (
                <ProductListing
                  {...props}
                  products={this.state.products}
                  types={this.state.types}
                  handleAdding={this.handleAdding}
                  pageSize={this.state.pageSize}
                  activePage={this.state.activePage}
                  activeFilter={this.state.activeFilter}
                  sort={this.state.sort}
                  onFilterChange={this.handleFilterChange}
                  onPageChange={this.handlePageChange}
                  onSort={this.handelSort}
                  onSearch={this.handleSearch}
                  search={this.state.search}
                />
              )}
            />
            <Route path="/add-product" component={addProduct} />
            <Route path="/product-detail" component={ProductDetail} />

            <Redirect from="/" to="/home" />
            <Redirect to="/not-found" />
          </Switch>
          <Footer></Footer>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
