import React, { Component } from 'react';

class CitiesItems extends Component {
  onClick = () => {
    this.props.onSelect(this.props.city);
  };
  render() {
    const { isSelected, city } = this.props;
    return (
      <li
        onClick={this.onClick}
        className={`list-item ${isSelected ? 'is-selected' : ''}`}
      >
        {city.title}
      </li>
    );
  }
}

export default CitiesItems;
