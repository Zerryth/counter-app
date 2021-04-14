import React, { Component } from "react";

export default class Counter extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  //   if (prevProps.counter.value !== this.props.counter.value) {
  //     // Ajax call and get new data from the server
  //   }
  // }

  // componentWillUnmount() {
  //   console.log("Counter - Unmount");
  // }

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  render() {
    console.log("Counter - Rendered");
    const { counter, onIncrement, onDelete, onDecrement } = this.props;
    console.log(`counter.val ${counter.value}, counter.id ${counter.id}`);
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            disabled={this.shouldDisable(counter.value)}
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            ×
          </button>
        </div>
      </div>
    );
  }

  shouldDisable(counterVal) {
    return counterVal === 0 ? true : false;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
