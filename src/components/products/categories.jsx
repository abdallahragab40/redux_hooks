import React, { Component } from "react";

class Categories extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* filter header */}
        <h5>Categories</h5>
        {/* filter list */}
        <ul className="list list--vr-separator">
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Arts &amp; Crafts
          </li>
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Automotive
          </li>
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Baby
          </li>
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Books
          </li>
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Eletronics
          </li>
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Women's Fashion
          </li>
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Men's Fashion
          </li>
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Health &amp; Household
          </li>
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Home &amp; Kitchen
          </li>
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Military Accessories
          </li>
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Movies &amp; Television
          </li>
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Sports &amp; Outdoors
          </li>
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Tools &amp; Home Improvement
          </li>
          <li className="link list__item">
            <i className="link__icon fas fa-angle-right" />
            Toys &amp; Games
          </li>
        </ul>
      </div>
    );
  }
}

export default Categories;
