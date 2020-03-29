import React, { Component } from "react";

class ShoppingCart extends Component {
  state = {
    isopened: false
  };
  toggle = () => {
    this.setState({ isopened: !this.state.isopened });
  };
  render() {
    return (
      <React.Fragment>
        {/* header */}
        <div
          style={{ cursor: "pointer" }}
          onClick={() => this.toggle()}
          className={
            this.state.isopened
              ? "dropdown dropdown--left dropdown--opened"
              : "dropdown dropdown--left "
          }
        >
          <div className="dropdown__header">
            <div
              className="image image--small"
              style={{
                backgroundImage: 'url("img/icons/icon-cart-big.svg")'
              }}
            >
              <div className="notification notification--danger">
                {this.props.products.length}
              </div>
            </div>
          </div>
          {/* body */}
          <div className="dropdown__body">
            {/* items */}
            <ul className="dropdown__items list list--vr-separator">
              {this.props.products.map(product => (
                <li key={product.id} className="dropdown__item list__item">
                  {/* item small 2 */}
                  <div className="item-small-1">
                    {/* item data */}
                    <div className="item-small-1__data">
                      {/* title */}
                      <a href className="item-small-1__title">
                        {product.title}
                      </a>
                      {/* price */}
                      <span className="item-small-1__description">
                        {product.count} X{" "}
                        {product.discount
                          ? product.price - product.discount
                          : product.price}
                      </span>
                    </div>
                    {/* item image */}
                    <div className="item-small-1__image-box">
                      <a
                        href="/"
                        className="item-small-1__image image"
                        style={{
                          backgroundImage: `url("img/products/product-1.jpg")`
                        }}
                      >
                        {" "}
                      </a>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => this.props.onDelete(product)}
                        className="item-small-1__action"
                      >
                        <i className="fas fa-times" />
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* totals */}
            <div className="separator" />

            <div className="block">
              <span className="lable">Total:</span>
              <span className="lable">{this.props.totalPrice()}</span>
            </div>

            {/* actions */}
            <div className="block list list--hr">
              <a className="list-item btn btn--gray" href>
                View Cart
              </a>
              <a className="list-item btn btn--primary" href>
                Checkout
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
