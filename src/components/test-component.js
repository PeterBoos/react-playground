import React, { Component } from 'react';

class TestComponent extends Component {
  render() {
    return (
      <div>Test components says: {this.props.text} </div>
    );
  }
}

export default TestComponent;