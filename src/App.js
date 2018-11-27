import React, { Component } from 'react';
import FrontSide from './component/FrontPanel/index';
import BackSide from './component/BackPanel/index';
import './panel.css';

class App extends Component {
  state = {
    flipped: false,
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
          <FrontSide onClick={this.onFlipHandler} />
        </div>
        <div className="panel-back">
          <BackSide onClick={this.onFlipHandler} />
        </div>
      </div>
    );
  }
}

export default App;
