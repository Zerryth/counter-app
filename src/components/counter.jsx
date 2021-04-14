import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: [],
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  renderTags() {
    if (this.state.tags.length === 0) return <p>'There are no tags'</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  formatCount = () => {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  //   doHandleIncrement = (product) => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <h4>Counter #{this.props.id}</h4>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}
