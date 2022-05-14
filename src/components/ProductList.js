import PropTypes from "prop-types";
import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  static propTypes = {
    productsData: PropTypes.array,
    setStateModal: PropTypes.func,
    onProductAdd: PropTypes.func,
  };

  render() {
    // return this.renderContent;
    return (
      <>
        {this.props.productsData.map((item) => {
          return (
            <ProductItem
              key={item.id}
              item={item}
              setStateModal={this.props.setStateModal}
              onProductAdd={this.props.onProductAdd}
            />
          );
        })}
      </>
    );
  }
}
