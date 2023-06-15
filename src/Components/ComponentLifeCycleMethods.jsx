import React, { Component } from "react";
import UnmountableComponent from "./UnmountableComponent";
export default class ComponentLifeCycleMethods extends Component {
  // It is a function , Executes when the mount
  constructor() {
    super(); // calling the constrcutor of the parent class, which is the component class
    console.log("Constructor is called 👌");
    // data needed by the component
    this.state = {
      count: 0,
      show: true,
    };
  }
  componentDidMount() {
    console.log("App Component Mounted 😊, ");
  }
  componentDidUpdate() {
    console.log("App Component Updated 👍");
  }
  increment() {
    // to change the state, always use this.setState()
    // Takes one parameter , which is the NEW state
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log("Render called 😒");
    // You can only return a single Element
    return (
      <>
        <h3>
          Component Lifecycle methods can only be used inside Class Components
        </h3>
        <h1>Component lifecycle stages</h1>
        <ol>
          <li>
            Mounting Phase
            <ol>
              <li>Constructor</li>
              <li>render()</li>
              <li>componentDidMount</li>
            </ol>
          </li>
          <li>
            Updation Phase
            <ol>
              <li>render()</li>
              <li>componentDidUpdate()</li>
            </ol>
          </li>
          <li>Unmounting Phase</li>
        </ol>
        <h1>Counter : {this.state.count} </h1>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          ➕
        </button>
        <br />
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Unmount the following component
        </button>
        {this.state.show && <UnmountableComponent />}
        {/* Conditional Rendering  */}
      </>
    );
  }
}
