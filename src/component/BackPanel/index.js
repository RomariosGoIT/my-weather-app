import React, { Component } from 'react';
import BackSideView from './BackPanel';

class BackSide extends Component {
  render() {
    return <BackSideView clicked={this.props.onClick} />;
  }
}

export default BackSide;
