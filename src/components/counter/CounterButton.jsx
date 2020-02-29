import React, { Component } from "react";
import "./CounterButton.css";
import Counter from "./Counter.jsx";

class CounterButton extends Component {
  constructor() {
    super();

    this.Increment = this.Increment.bind(this);
  }

  render() {
    return (
      <div className="CounterButton">
        <div className="button1">
          <button onClick={this.Increment}>{this.props.by}</button>
        </div>
      </div>
    );
  }

  Increment(by) {
    console.log("swathy");

    this.props.incrementMethod(this.props.by);
  }
}
export default CounterButton;
