import React, { Component } from 'react';
import FrontSideView from './FrontPanel';
import moment from 'moment';
import { getWeatherForLocation } from '../../api';
import cities from '../../cities.json';

class FrontSide extends Component {
  state = {
    currentWather: null,
    timeZone: null,
  };

  componentDidMount() {
    getWeatherForLocation(cities[0]).then(weather => {
      console.log(weather);
      this.setState({
        currentWather: weather.currently,
        timeZone: weather.timezone,
      });
    });
  }

  render() {
    if (!this.state.currentWather) {
      return null;
    }

    const {
      icon,
      temperature,
      apparentTemperature,
      summary,
    } = this.state.currentWather;
    return (
      <FrontSideView
        date={moment()}
        icon={icon}
        temperature={temperature}
        apparentTemperature={apparentTemperature}
        summary={summary}
        currentCityName={this.state.timeZone}
        clicked={this.props.onClick}
      />
    );
  }
}

export default FrontSide;
