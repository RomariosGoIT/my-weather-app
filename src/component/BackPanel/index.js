import React, { Component } from 'react';
import BackSideView from './BackPanel';
import cities from '../../cities.json';

class BackSide extends Component {
  render() {
    return (
      <BackSideView
        onSelect={this.props.onSelect}
        cities={cities}
        clicked={this.props.onClick}
        currentCity={this.props.currentCity}
      />
    );
  }
}

export default BackSide;
