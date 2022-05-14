import PropTypes from "prop-types";
import React, { Component } from "react";
import "animate.css";

export default class Modal extends Component {
  static propTypes = {
    content: PropTypes.object,
  };

  state = {
    isModalOpen: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.content !== prevProps.content) {
      this.handleModalOpen();
    }
  }

  handleModalOpen = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  renderContent = () => {
    let { name, price, description, shortDescription, quantity, image } =
      this.props.content || "";

    if (this.state.isModalOpen) {
      return (
        <>
          <div className="fixed bg-gray-300 w-screen h-screen top-0 left-0 opacity-80"></div>

          <div
            className="fixed border rounded bg-white w-1/2 h-[43rem] top-10 left-1/4 animate__animated animate__zoomIn"
            style={{ animationDuration: "0.5s" }}
          >
            <div className="border-b flex items-center justify-between">
              <h2 className="p-3 text-xl font-bold">{name}</h2>

              <div
                className="p-3 cursor-pointer"
                onClick={this.handleModalClose}
              >
                <i
                  className="fa fa-times text-gray-400 active:text-black"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="w-full h-1/3 flex justify-center">
              <img src={image} className="h-full" alt="" />
            </div>

            <h3 className="text-center font-bold text-base mb-4">
              Product Information
            </h3>
            <table className="table-auto">
              <tbody>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="px-6 py-2 font-semibold text-left whitespace-nowrap"
                  >
                    Name
                  </th>
                  <td className="px-6 py-2">{name}</td>
                </tr>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="px-6 py-2 text-left font-semibold whitespace-nowrap"
                  >
                    Price
                  </th>
                  <td className="px-6 py-2">{"$" + price}</td>
                </tr>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="px-6 py-2 text-left font-semibold whitespace-nowrap"
                  >
                    Short Description
                  </th>
                  <td className="px-6 py-2">{shortDescription}</td>
                </tr>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="px-6 h-28 text-left font-semibold whitespace-nowrap"
                  >
                    Description
                  </th>
                  <td className="px-6 py-2">{description}</td>
                </tr>
                <tr className="border-b">
                  <th
                    scope="row"
                    className="px-6 py-2 text-left font-semibold whitespace-nowrap"
                  >
                    Quantity
                  </th>
                  <td className="px-6 py-2">{quantity}</td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-end space-x-2 m-3">
              <button
                className="bg-red-500 text-white p-2 text-sm active:bg-red-800"
                onClick={this.handleModalClose}
              >
                Close
              </button>
              <button
                className="bg-black text-white p-2 text-sm active:bg-gray-600"
                onClick={() => {
                  console.log("add to cart click");
                }}
              >
                Add to cart
                <i className="fa fa-shopping-cart ml-1" aria-hidden="true" />
              </button>
            </div>
          </div>
        </>
      );
    } else return <span></span>;
  };

  render() {
    return this.renderContent();
  }
}
