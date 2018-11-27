import React, { Component } from 'react';
import FrontSide from './component/FrontPanel/index';
import BackSide from './component/BackPanel/index';
import cities from './cities.json';
import './panel.css';

class App extends Component {
  state = {
    flipped: true,
    currentCity: cities[0],
  };

  onFlipHandler = () => {
    this.setState({
      flipped: !this.state.flipped,
    });
  };

  render() {
    return (
      <div className={`panel ${this.state.flipped ? 'flip' : null}`}>
        <div className="panel-front">
          <FrontSide
            currentCity={this.state.currentCity}
            onClick={this.onFlipHandler}
          />
        </div>
        <div className="panel-back">
          <BackSide
            onClick={this.onFlipHandler}
            currentCity={this.state.currentCity}
          />
        </div>
      </div>
    );
  }
}

export default App;
