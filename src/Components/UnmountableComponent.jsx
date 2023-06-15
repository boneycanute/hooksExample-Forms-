import React, { Component } from "react";

export class UnmountableComponent extends Component {
  componentWillUnmount() {
    console.log("Component Unmounted Successfully 😵");
  }
  render() {
    return <div>UnmountableComponent</div>;
  }
}

export default UnmountableComponent;
