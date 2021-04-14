import React, { Component } from "react";

export default class Counter extends Component {
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <h4>Counter #{this.props.id}</h4>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
