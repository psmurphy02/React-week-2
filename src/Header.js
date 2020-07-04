import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        {this.props.arrayData.map((object) => {
          return (
            <p>
              This is a {object.color} {object.make}.
            </p>
          );
        })}
      </header>
    );
  }
}
