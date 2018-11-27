import React from 'react';
import './CitiesList.css';
import cities from '../../cities.json';

const citiesList = props => (
  <ul className="list">
    {cities.map(city => {
      return (
        <li
          className={`list-item ${
            props.currentCity.title === city.title ? 'is-selected' : ''
          }`}
          key={city.woeid}
        >
          {city.title}
        </li>
      );
    })}
  </ul>
);

export default citiesList;
