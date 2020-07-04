import React, { Component } from "react";
import Header from "./Header";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayData: [
        { make: "Honda", color: "red" },
        { make: "Chevy", color: "blue" },
        { make: "Ford", color: "white" },
      ],
      boolState: false,
    };
  }

  switcher = () => {
    this.setState({ boolState: !this.state.boolState });
    // boolState = !this.boolState;
  };

  render() {
    let cars;
    if (this.state.boolState === true) {
      cars = <Header arrayData={this.state.arrayData} />;
    } else {
      cars = <div />;
    }
    return (
      <div>
        <button onClick={this.switcher}>Click Me</button>
        {cars}
      </div>
    );
  }
}
