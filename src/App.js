import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

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

class App extends Component {
  state = {
    types: [
      { id: 0, name: "All" },
      { id: 1, name: "Tv" },
      { id: 2, name: "Mobile" },
      { id: 3, name: "Car" },
      { id: 4, name: "Sports" }
    ],
    products: [
      {
        id: 1,
        typeId: 1,
        title: "Sony Tv",
        imageURL: 'url("img/products/product-grey-1.jpg")',
        price: 2000,
        discount: 500,
        count: 0,
        isInCard: false
      },
      {
        id: 2,
        typeId: 1,
        title: "Samsung Tv",
        imageURL: 'url("img/products/product-grey-1.jpg")',
        price: 300,
        count: 0,
        isInCard: false
      },
      {
        id: 3,
        typeId: 1,
        title: "Toshiba Tv",
        imageURL: 'url("img/products/product-grey-1.jpg")',
        price: 2500,
        discount: 200,
        count: 0,
        isInCard: false
      },
      {
        id: 4,
        typeId: 2,
        title: "Sony Mobile",
        imageURL: 'url("img/products/product-grey-1.jpg")',
        price: 8000,
        discount: 1500,
        count: 0,
        isInCard: false
      },
      {
        id: 5,
        typeId: 2,
        title: "Samsung Mobile",
        imageURL: 'url("img/products/product-grey-1.jpg")',
        price: 6600,
        count: 0,
        isInCard: false
      },
      {
        id: 6,
        typeId: 2,
        title: "Toshiba Mobile",
        imageURL: 'url("img/products/product-grey-1.jpg")',
        price: 5500,
        discount: 700,
        count: 0,
        isInCard: false
      },
      {
        id: 7,
        typeId: 3,
        title: "Sony Car",
        imageURL: 'url("img/products/product-grey-1.jpg")',
        price: 20000,
        discount: 5000,
        count: 0,
        isInCard: false
      },
      {
        id: 8,
        typeId: 3,
        title: "Samsung Car",
        imageURL: 'url("img/products/product-grey-1.jpg")',
        price: 30000,
        count: 0,
        isInCard: false
      },
      {
        id: 9,
        typeId: 3,
        title: "Toshiba Car",
        imageURL: 'url("img/products/product-grey-1.jpg")',
        price: 25000,
        discount: 2000,
        count: 0,
        isInCard: false
      },
      {
        id: 10,
        typeId: 4,
        title: "Ahly Sports",
        imageURL: 'url("img/products/product-grey-1.jpg")',
        price: 450,
        discount: 100,
        count: 0,
        isInCard: false
      },
      {
        id: 11,
        typeId: 4,
        title: "Arsenal Sports",
        imageURL: 'url("img/products/product-grey-1.jpg")',
        price: 300,
        count: 0,
        isInCard: false
      },
      {
        id: 12,
        typeId: 4,
        title: "Milan Sports",
        imageURL: 'url("img/products/product-grey-1.jpg")',
        price: 250,
        discount: 50,
        count: 0,
        isInCard: false
      }
    ],
    pageSize: 9,
    activePage: 1,
    activeFilter: 0,
    search: "",
    sort: { path: "title", order: "asc" }
  };

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
      .reduce((a, b) => a + b);
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
    );
  }
}

export default App;
