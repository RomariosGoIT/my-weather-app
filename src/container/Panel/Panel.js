import React from "react";
import "./panel.css";
import moment from "moment";

import FrontPanel from "../../component/FrontPanel/FrontPanel";

const panel = () => (
  <div className="panel">
    <div className="panel-front">
      <FrontPanel
        date={moment()}
        icon="default"
        temperature={19}
        apparentTemperature={15}
        currentCityName="Kiev"
      />{" "}
    </div>{" "}
    <div className="panel-back"> Panel back </div>{" "}
  </div>
);

export default panel;
