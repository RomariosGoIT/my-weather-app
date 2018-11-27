import React from 'react';
import './CitiesList.css';
import CitiesItems from './CitiesItems/CitiesItems';
import cities from '../../cities.json';

const citiesList = props => (
  <ul className="list">
    {cities.map(city => {
      return (
        <CitiesItems
          key={city.woeid}
          onSelect={props.onSelect}
          isSelected={props.currentCity.title === city.title}
          city={city}
        />
      );
    })}
  </ul>
);

export default citiesList;
