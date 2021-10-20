import React from "react";

class Footer extends React.Component {
  constructor() {
    super();

    this.state = {
      year: new Date().getFullYear(),
    };
  }

  // addYear = () => {
  //   this.state.year = new Date().getFullYear() + 1;
  // };

  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <div onClick={this.addYear}>Copyright (c) {this.state.year}</div>
      </div>
    );
  }
}

export default Footer;
