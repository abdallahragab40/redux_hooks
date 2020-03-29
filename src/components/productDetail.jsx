import React, { Component } from "react";

class ProductDetail extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          {/* Listing Items */}
          <div className="product-details container">
            <section className="product-details__main">
              {/* images slider */}
              <div className="slider">
                <div className="slider__items">
                  <div
                    className="slider__item active"
                    style={{
                      backgroundImage: "url(img/products/product-grey-7.jpg)"
                    }}
                  />
                  <div
                    className="slider__item"
                    style={{
                      backgroundImage: "url(img/products/product-grey-7.jpg)"
                    }}
                  />
                  <div
                    className="slider__item"
                    style={{
                      backgroundImage: "url(img/products/product-grey-7.jpg)"
                    }}
                  />
                </div>
                <div className="slider__indicators">
                  <span className="slider__indicator active" />
                  <span className="slider__indicator" />
                  <span className="slider__indicator" />
                </div>
              </div>
              {/* product info */}
              <div className="product-details__info">
                <h1>Blue Ladies Handbag</h1>
                <div className="rating">
                  <div className="rating__stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                  </div>
                  <div className="rating__data">2 reviews</div>
                </div>
                <div className="product-details__amount">$22</div>
                <p className="product-details__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tempus nibh sed elimttis adipiscing. Fusce in hendrerit purus.
                </p>
                <div className="product-details__add">
                  <div className="increment-control">
                    <a href="#" className="increment-control__action">
                      -
                    </a>
                    <input
                      type="text"
                      className="form-control"
                      title="Qty"
                      defaultValue={1}
                    />
                    <a href="#" className="increment-control__action">
                      +
                    </a>
                  </div>
                  <button href="#" className="btn btn--primary">
                    Add to cart
                  </button>
                </div>
                <div className="product-details__meta">
                  Categories:{" "}
                  <a rel="tag" href="#">
                    Accessories
                  </a>
                  ,{" "}
                  <a rel="tag" href="#">
                    Bags
                  </a>
                  .
                </div>
              </div>
            </section>
            <section className="tabs">
              <div className="tabs__headers">
                <div className="tabs__header active">Description</div>
                <div className="tabs__header">Additional Information</div>
                <div className="tabs__header">Reviews (2)</div>
              </div>
              <div className="tabs__bodies">
                <div className="tabs__body active">
                  <div className="product-details__desc">
                    <p>
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Fusce sagittis, massa
                      fringilla consequat blandit, mauris ligula porta nisi, non
                      tristique enim sapien vel nisl. Suspendisse vestibulum
                      lobortis dapibus.
                    </p>
                    <p>
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Fusce sagittis, massa
                      fringilla consequat blandit, mauris ligula porta nisi, non
                      tristique enim sapien vel nisl. Suspendisse vestibulum
                      lobortis dapibus. Vestibulum ante ipsum primis in faucibus
                      orci luctus et ultrices posuere cubilia Curae;
                    </p>
                  </div>
                </div>
                <div className="tabs__body ">tab2</div>
                <div className="tabs__body">tab3</div>
              </div>
            </section>
            <div className="separator" />
            {/* related products */}
            <section className="realated-product">
              <h3>
                Related <strong>Products</strong>
              </h3>
              <strong>
                <div className="item-listing__items item-listing--4items">
                  {/* medium item */}
                  <div className="item-medium-1">
                    <div
                      className="item-medium-1__image image"
                      style={{
                        backgroundImage:
                          'url("img/products/product-grey-1.jpg")'
                      }}
                    >
                      <a href="#" className="item-medium-1__action">
                        Add to Cart
                      </a>
                    </div>
                    <a href="#">
                      <h4>Photo Camera</h4>
                      <div>
                        <del>$325</del>
                        <span className="lable">$299</span>
                      </div>
                    </a>
                    <div className="crud-actions">
                      <a href="#">
                        <i className="far fa-eye" />
                      </a>
                      <a href="#">
                        <i className="fas fa-edit" />
                      </a>
                      <a href="#">
                        <i className="fas fa-trash-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="item-medium-1">
                    <div
                      className="item-medium-1__image image"
                      style={{
                        backgroundImage:
                          'url("img/products/product-grey-1.jpg")'
                      }}
                    >
                      <a href="#" className="item-medium-1__action">
                        Add to Cart
                      </a>
                    </div>
                    <a href="#">
                      <h4>Photo Camera</h4>
                      <div>
                        <del>$325</del>
                        <span className="lable">$299</span>
                      </div>
                    </a>
                    <div className="crud-actions">
                      <a href="#">
                        <i className="far fa-eye" />
                      </a>
                      <a href="#">
                        <i className="fas fa-edit" />
                      </a>
                      <a href="#">
                        <i className="fas fa-trash-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="item-medium-1">
                    <div className="item-medium-1__alert">Sale</div>
                    <div
                      className="item-medium-1__image image"
                      style={{
                        backgroundImage:
                          'url("img/products/product-grey-1.jpg")'
                      }}
                    >
                      <a href="#" className="item-medium-1__action">
                        Add to Cart
                      </a>
                    </div>
                    <a href="#">
                      <h4>Photo Camera</h4>
                      <div>
                        <del>$325</del>
                        <span className="lable">$299</span>
                      </div>
                    </a>
                    <div className="crud-actions">
                      <a href="#">
                        <i className="far fa-eye" />
                      </a>
                      <a href="#">
                        <i className="fas fa-edit" />
                      </a>
                      <a href="#">
                        <i className="fas fa-trash-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="item-medium-1">
                    <div className="item-medium-1__alert">Sale</div>
                    <div
                      className="item-medium-1__image image"
                      style={{
                        backgroundImage:
                          'url("img/products/product-grey-1.jpg")'
                      }}
                    >
                      <a href="#" className="item-medium-1__action">
                        Add to Cart
                      </a>
                    </div>
                    <a href="#">
                      <h4>Photo Camera</h4>
                      <div>
                        <del>$325</del>
                        <span className="lable">$299</span>
                      </div>
                    </a>
                    <div className="crud-actions">
                      <a href="#">
                        <i className="far fa-eye" />
                      </a>
                      <a href="#">
                        <i className="fas fa-edit" />
                      </a>
                      <a href="#">
                        <i className="fas fa-trash-alt" />
                      </a>
                    </div>
                  </div>
                </div>
              </strong>
            </section>
            <strong></strong>
          </div>
          <strong></strong>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetail;
