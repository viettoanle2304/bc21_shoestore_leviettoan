import PropTypes from "prop-types";
import React, { Component } from "react";
import ModalCart from "./ModalCart";

export default class ShoesCart extends Component {
  static propTypes = {
    productsInCart: PropTypes.array,
    handleQuantityChange: PropTypes.func,
  };

  renderContent = () => {
    if (this.props.productsInCart.length <= 0) {
      return (
        <p className="text-red-500 text-xl font-thin">
          You have no products in cart currently
        </p>
      );
    } else
      return (
        <>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.props.productsInCart.map((product) => (
                  <ModalCart
                    key={product.id}
                    productItem={product}
                    onQuantityChange={this.props.handleQuantityChange}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <button className="p-2 border bg-black text-white m-3 float-right active:bg-gray-700">
            Checkout
          </button>
        </>
      );
  };

  render() {
    // console.log(this.props.productsInCart);
    return <div className="w-full">{this.renderContent()}</div>;
  }
}
