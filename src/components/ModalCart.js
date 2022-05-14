import PropTypes from "prop-types";
import React, { Component } from "react";

const increment = 1;
const decrement = -1;

export default class ModalCart extends Component {
  static propTypes = {
    productItem: PropTypes.object,
    onQuantityChange: PropTypes.func,
  };

  render() {
    let { id, name, image, price, quantity } = this.props.productItem;
    return (
      <tr className="bg-white border-b">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          {id}
        </th>
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">
          <img src={image} alt={name} style={{ height: "100px" }} />
        </td>
        <td className="px-6 py-4">${price}</td>
        <td className="px-6 py-4 space-x-2">
          <button onClick={() => this.props.onQuantityChange(id, decrement)}>
            <i className="fa fa-minus text-sm" aria-hidden="true" />
          </button>
          <span className="">{quantity}</span>
          <button onClick={() => this.props.onQuantityChange(id, increment)}>
            <i className="fa fa-plus text-sm" aria-hidden="true" />
          </button>
        </td>
        <td className="px-6 py-4">${price * quantity}</td>
      </tr>
    );
  }
}
