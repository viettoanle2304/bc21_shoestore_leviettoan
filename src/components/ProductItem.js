import PropTypes from "prop-types";
import React, { Component } from "react";

export default class ProductItem extends Component {
  static propTypes = {
    item: PropTypes.object,
    setStateModal: PropTypes.func,
    onCartAdd: PropTypes.func,
  };

  render() {
    const { id, name, price, image } = this.props.item;
    // console.log(this.props);

    return (
      <div className="border transition-all hover:scale-105">
        <div className="">
          <img
            className="w-full cursor-pointer"
            src={image}
            alt="shoe product"
            onClick={() => this.props.setStateModal(id)}
          />
        </div>

        <div className="ml-5 space-y-1 pb-3">
          <h3
            className="text-xl font-thin cursor-pointer hover:underline"
            onClick={() => this.props.setStateModal(id)}
          >
            {name}
          </h3>
          <p className="font-medium text-base">{"$" + price}</p>
          <button
            className="bg-black text-white p-2 text-sm"
            onClick={() => {
              this.props.onProductAdd(id);
            }}
          >
            Add to cart
            <i className="fa fa-shopping-cart ml-1" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}
