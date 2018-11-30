import React, { Component } from 'react';
import FrontSideView from './FrontPanel';
import moment from 'moment';
import { getWeatherForLocation } from '../../api';

class FrontSide extends Component {
  state = {
    currentWather: null,
    timeZone: null,
    prevCityId: null,
  };

  updaterWeatherHandler = () => {
    getWeatherForLocation(this.props.currentCity)
      .then(weather => {
        console.log(weather);
        this.setState({
          currentWather: weather.currently,
          timeZone: weather.timezone,
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.updaterWeatherHandler();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentCity.woeid !== prevState.prevCityId) {
      return {
        prevCityId: nextProps.currentCity.woeid,
        currentWather: null,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentWather) {
      return null;
    }
    this.updaterWeatherHandler();
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
        currentCityName={this.props.currentCity}
        clicked={this.props.onClick}
      />
    );
  }
}

export default FrontSide;
