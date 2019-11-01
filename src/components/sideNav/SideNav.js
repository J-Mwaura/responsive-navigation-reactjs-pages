import React from "react";
import "./SideNav.css";

const SideNav = props => {
  let sideNavClasses = "side_nav";
  if (props.show) {
    sideNavClasses = "side_nav open";
  }
  return (
    <nav className={sideNavClasses}>
      <div className="user_image_div">
        <img
          className="user_image"
          src="./chameleon.ico"
          alt="user image"
        ></img>
      </div>
      <ul>
        <li>
          <a href="/">Home </a>
        </li>
        <li>
          <a href="/categories">Category</a>
        </li>
        <li>
          <a href="/">User</a>
        </li>
      </ul>
    </nav>
  );
};
export default SideNav;
