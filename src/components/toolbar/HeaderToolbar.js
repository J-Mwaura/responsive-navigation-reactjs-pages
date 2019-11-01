import React from "react";
import "./HeaderToolbar.css";
//import logo from "./logo192.png";
import SideNavToggleButton from "../sideNav/SideNavToggleButton";

const HeaderToolbar = props => (
  <header className="headerToolbar">
    <div className="headerToolbar_navigation">
      <div className="headerToolbar_toggle_button">
        <SideNavToggleButton click={props.sideNavClickHandler} />
      </div>
      <div className="headerToolbar_logo">
        <img src="./chameleon.ico" alt="THE LOGO" style={{ height: "40px" }} />
      </div>
      <div className="spacer"></div>
      <div className="headerToolbar_navigation_items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/categories">Category</a>
          </li>
          <li>
            <a href="/">User</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default HeaderToolbar;
