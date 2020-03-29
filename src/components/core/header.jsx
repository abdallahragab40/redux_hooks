import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "./shoppingCart";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        {/* upper header */}
        <div className="header__upper">
          {/* container */}
          <div className="container">
            {/* contact info */}
            <ul className="list list--hr list--hr-separator">
              <li className="list__item">
                <span className="info">
                  {/* icon */}
                  <i className="info__icon far fa-dot-circle" />
                  {/* info */}
                  <span className="info__data">
                    1234 Street Name, City Name
                  </span>
                </span>
              </li>
              <li className="list__item">
                <a href="/" className="info">
                  {/* icon */}
                  <i className="info__icon fab fa-whatsapp" />
                  {/* info */}
                  <span className="info__data">123-456-7890</span>
                </a>
              </li>
              <li className="list__item">
                <a href="/" className="info">
                  {/* icon */}
                  <i className="info__icon far fa-envelope" />
                  {/* info */}
                  <span className="info__data">mail@domain.com</span>
                </a>
              </li>
            </ul>
            {/* side menu */}
            <ul className="list list--hr">
              <li className="list__item">
                <a href="/" className="link">
                  {/* icon */}
                  <i className="link__icon fas fa-angle-right" />
                  {/* info */}
                  About Us
                </a>
              </li>
              <li className="list__item">
                <a href="/" className="link">
                  {/* icon */}
                  <i className="link__icon fas fa-angle-right" />
                  {/* info */}
                  Contact Us
                </a>
              </li>
              {/* languges */}
              <li className="list__item">
                {/* drop down */}
                {/* to oppen dropdown dropdown--opened */}
                <div className="dropdown ">
                  {/* header */}
                  <div className="dropdown__header">
                    <a href="/" className="link">
                      <img className="flag flag-us" alt="" />
                      English
                    </a>
                    <i className="fas fa-angle-down" />
                  </div>
                  {/* items */}
                  <div className="dropdown__body">
                    <ul className="dropdown__items list">
                      <li className="dropdown__item list__item">
                        <a href="/" className="link">
                          <img className="flag flag-us" alt="" />
                          English
                        </a>
                      </li>
                      <li className="dropdown__item list__item">
                        <a href="/" className="link">
                          <img className="flag flag-es" src alt="" />
                          Español
                        </a>
                      </li>
                      <li className="dropdown__item list__item">
                        <a href="/" className="link">
                          <img className="flag flag-fr" src alt="" />
                          Française
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* middle header */}
        <div className="header__middle container">
          {/* logo */}
          <a href="/" className="header__logo-box">
            <img className="header__logo" src="img/logo.png" alt="" />
          </a>
          {/* user options */}
          <div className="header__user-options">
            {/* login control */}
            <Link to="/login" className="link">
              Login
            </Link>
            <div className="dropdown">
              <div className="dropdown__header">
                <div
                  className="image image--small image--circle"
                  style={{ backgroundImage: 'url("img/PersonalImage.png")' }}
                ></div>
              </div>
              <div className="dropdown__body"></div>
            </div>
            <ShoppingCart
              totalPrice={this.props.totalPrice}
              products={this.props.products.filter(p => p.isInCard)}
              onDelete={this.props.onDelete}
            ></ShoppingCart>
          </div>
        </div>

        {/* lower header */}
        <div className="header__lower container">
          {/* navigation */}
          <nav className="nav">
            <ul className="nav__items list list--hr">
              {/* items */}
              <li className="nav__item">
                <Link className="nav__link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav__item dropdown ">
                {/* title */}
                <Link className="nav__link dropdown__header" to="/">
                  Products
                </Link>
                {/* items */}
                <div className="dropdown__body">
                  <ul className=" list">
                    <li className="list__item">
                      <Link className="nav__inner-link" to="/home">
                        Product Listing
                      </Link>
                    </li>
                    <li className="list__item">
                      <Link className="nav__inner-link" to="/add-product">
                        Add Product
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/about-us">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
