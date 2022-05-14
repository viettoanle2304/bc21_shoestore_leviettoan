import React, { Component } from "react";

import ProductList from "./ProductList";
import fileData from "../data/data.json";
import Modal from "./Modal";
import ShoesCart from "./ShoesCart";

export default class ShoesStore extends Component {
  state = {
    products: [],
    productDetails: {},
    isCartOpen: false,
    productsInCart: [],
  };

  componentDidMount() {
    this.setState({
      products: fileData,
    });
  }

  setStateModal = (id) => {
    const choosenProductIndex = this.state.products.findIndex(
      (product) => product.id === id
    );

    this.setState({
      productDetails: { ...this.state.products[choosenProductIndex] },
    });
  };

  handleCartOpen = () => {
    this.setState({
      isCartOpen: true,
    });
  };

  handleCartClose = () => {
    this.setState({
      isCartOpen: false,
    });
  };

  handleAddProduct = (id) => {
    const products = this.state.products.reduce((memo, product) => {
      if (product.id === id) {
        let index = memo.findIndex((product) => product.id === id);
        if (index === -1) {
          return memo.concat({ ...product, quantity: 1 });
        } else {
          return [
            ...memo.slice(0, index),
            { ...memo[index], quantity: memo[index].quantity + 1 },
            ...memo.slice(index + 1),
          ];
        }
      } else return memo;
    }, this.state.productsInCart);

    this.setState({
      productsInCart: products,
    });
  };

  handleQuantityChange = (id, val) => {
    const products = this.state.productsInCart.reduce((memo, product) => {
      if (product.id === id) {
        let valAfterChange = product.quantity + val;
        if (valAfterChange > 0) {
          return memo.concat({ ...product, quantity: valAfterChange });
        } else {
          return memo;
        }
      } else return memo.concat(product);
    }, []);

    this.setState(
      {
        productsInCart: products,
      },
      () => console.log(this.state.productsInCart)
    );
  };

  renderContent = () => {
    if (this.state.isCartOpen) {
      return (
        <ShoesCart
          productsInCart={this.state.productsInCart}
          handleQuantityChange={this.handleQuantityChange}
        />
      );
    } else {
      return (
        <div className="grid grid-cols-3 gap-4">
          <ProductList
            productsData={this.state.products}
            setStateModal={this.setStateModal}
            onProductAdd={this.handleAddProduct}
          />
        </div>
      );
    }
  };

  render() {
    return (
      <>
        <div className="flex flex-col w-1/4 justify-center fixed left-0 top-1/2">
          <button
            className={`px-5 text-left border ${
              !this.state.isCartOpen ? "border-blue-500" : "border-transparent"
            } hover:border-blue-500`}
            onClick={this.handleCartClose}
          >
            Home
          </button>
          <button
            className={`px-5 text-left border ${
              this.state.isCartOpen ? "border-blue-500" : "border-transparent"
            } hover:border-blue-500`}
            onClick={this.handleCartOpen}
          >
            Cart
          </button>
        </div>

        <div className="w-3/4 px-10 border border-blue-500 pb-10">
          <h1 className="text-center text-3xl my-5 font-thin">
            {this.state.isCartOpen ? "Cart" : "Shoes Shop"}
          </h1>

          {this.renderContent()}

          <Modal
            content={this.state.productDetails}
            handleAddProduct={this.handleAddProduct}
          />
        </div>
      </>
    );
  }
}
