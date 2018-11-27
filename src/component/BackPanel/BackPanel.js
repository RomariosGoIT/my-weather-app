import React from 'react';

const backPanel = props => (
  <div>
    Back Panel
    <button onClick={props.clicked}> Flip </button>
  </div>
);

export default backPanel;
