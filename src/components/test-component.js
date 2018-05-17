import React, { Component } from 'react';

class TestComponent extends Component {
  render() {
    return (
      <div>Meddelande: {this.props.text} </div>
    );
  }
}

export default TestComponent;