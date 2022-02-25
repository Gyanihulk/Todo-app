import React, { Component } from "react";
import "./Counter.css";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      secondCounter: 100,
      thirdCounter: 1,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  render() {
    return (
      <div className="Counter">
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={15}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={3}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className="count">{this.state.counter}</span>
        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
  increment(by) {
    console.log(`increment in parent -${by}`);
    this.setState((prevState) => {
      return { counter: prevState.counter + by };
    });
  }
  decrement(by) {
    console.log(`increment in parent -${by}`);
    this.setState((prevState) => {
      return { counter: prevState.counter - by };
    });
  }
  reset() {
    console.log(`reset `);
    this.setState({ counter: 0 });
  }
}

class CounterButton extends Component {
  //define the initial state in a constructor
  //statee=> counter 0
  /* constructor() {
    super();

    this.state = {
      counter: 0,
      secondCounter: 100,
      thirdCounter: 1,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  } */

  render() {
    return (
      <div className="Counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
      </div>
    );
  }
  /* increment() {
    //console.log(`increment from parent -${by}`);
    this.setState({
      counter: this.state.counter + this.props.by,
    });
    this.props.incrementMethod(this.props.by);
  }
  decrement() {
    this.setState({
      counter: this.state.counter + this.props.by,
    });
    this.props.decrementMethod(this.props.by);
  } */
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};
export default Counter;
