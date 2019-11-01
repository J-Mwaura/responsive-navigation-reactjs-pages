import React from "react";
import "./SideNavToggleButton.css";

const SideNavToggleButton = props => (
  <button className="toggle_button" onClick={props.click}>
    <div className="toggle_Button_line"></div>
    <div className="toggle_Button_line"></div>
    <div className="toggle_Button_line"></div>
  </button>
);

export default SideNavToggleButton;
