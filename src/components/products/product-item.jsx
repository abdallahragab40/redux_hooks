import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  state = {};
  render() {
    return (
      <div className="item-medium-1">
        {this.props.product.discount ? (
          <div className="item-medium-1__alert">Sale</div>
        ) : (
          ""
        )}

        <div
          className="item-medium-1__image image"
          style={{ backgroundImage: 'url("img/products/product-grey-1.jpg")' }}
        >
          <span
            style={{ cursor: "pointer" }}
            onClick={() => this.props.onItemAdding(this.props.product)}
            href="/"
            className="item-medium-1__action"
          >
            Add to Cart
          </span>
        </div>
        <a href="/#">
          <h4>{this.props.product.title}</h4>
          <div className="flex-row">
            <div>
              <del>
                {this.props.product.discount ? this.props.product.price : ""}
              </del>
              <span className="lable">
                {this.props.product.price - (this.props.product.discount || 0)}
              </span>
            </div>
          </div>
        </a>
        <div className="crud-actions">
          <a href="/">
            <i className="far fa-eye" />
          </a>
          <Link to="/add-product/:id">
            <i className="fas fa-edit" />
          </Link>
          <a href="/">
            <i className="fas fa-trash-alt" />
          </a>
        </div>
      </div>
    );
  }
}

export default ProductItem;
