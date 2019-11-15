import React from "react";
import "./Spinner.scss";
import {
  SPINNER_ORBIT,
  SPINNER_ROTATING,
  SPINNER_BREEDING_RHOMBUS
} from "./spinnerTypes";

const Spinner = props => {
  document.documentElement.style.setProperty('--spinner-color', props.color);
  
  return (
    <div>
      {props.type === SPINNER_ORBIT ? (
        <div className="spinner spinner-orbit">
          <div className="orbit"></div>
          <div className="orbit"></div>
          <div className="orbit"></div>
        </div>
      ) : (
        ""
      )}

      {props.type === SPINNER_ROTATING ? (
        <div className="spinner spinner-rotating"></div>
      ) : (
        ""
      )}

      {props.type === SPINNER_BREEDING_RHOMBUS ? (
        <div className="spinner spinner-breeding-rhombus">
          <div className="rhombus child-1"></div>
          <div className="rhombus child-2"></div>
          <div className="rhombus child-3"></div>
          <div className="rhombus child-4"></div>
          <div className="rhombus child-5"></div>
          <div className="rhombus child-6"></div>
          <div className="rhombus child-7"></div>
          <div className="rhombus child-8"></div>
          <div className="rhombus big"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Spinner;
