import React, { Component } from "react";
import "./Counter.css";
import CounterButton from "./CounterButton.jsx";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      CounterButtonVal: 0
    };
    this.Increment = this.Increment.bind(this);
  }

  render() {
    return (
      <div className="Counter">
        <table align="center">
          <tbody>
            <tr>
              <td>
                <CounterButton
                  by={5}
                  incrementMethod={this.Increment}
                ></CounterButton>
              </td>
              <td>
                <CounterButton
                  by={10}
                  incrementMethod={this.Increment}
                ></CounterButton>
              </td>
            </tr>
            <tr>
              <td>
                <CounterButton
                  by={15}
                  incrementMethod={this.Increment}
                ></CounterButton>
              </td>
              <td>
                <CounterButton
                  by={20}
                  incrementMethod={this.Increment}
                ></CounterButton>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="CounterButtonValue">{this.state.CounterButtonVal}</div>

        <div className="OtherButtons">
          <div className="resetVal">
            <input
              type="button"
              value="RESET"
              style={{ backgroundColor: "red" }}
              onClick={this.Reset}
            ></input>
          </div>
        </div>
      </div>
    );
  }

  Increment(by) {
    this.setState({
      CounterButtonVal: this.state.CounterButtonVal + by
    });
  }

  Reset = () => {
    this.setState({
      CounterButtonVal: 0
    });
  };
}
export default Counter;
