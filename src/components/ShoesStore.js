import React, { Component } from "react";

import ProductList from "./ProductList";
import fileData from "../data/data.json";
import Modal from "./Modal";

export default class ShoesStore extends Component {
  state = {
    products: [],
    productDetails: {},
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

  render() {
    return (
      <div className="grid grid-cols-3 gap-4">
        <ProductList
          productsData={this.state.products}
          setStateModal={this.setStateModal}
        />

        <Modal content={this.state.productDetails} />
      </div>
    );
  }
}
