import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Toolbar from "./components/toolbar/HeaderToolbar";
import SideNav from "./components/sideNav/SideNav";
import Overlay from "./components/overlay/Overlay";
import Home from "./Home";
import Category from "./Category";
import "./components/globalCSS/globalStylesheet.css";

class App extends Component {
  state = {
    sideNavOpen: false
  };
  sideNavToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideNavOpen: !prevState.sideNavOpen };
    });
  };

  overlayClickHandler = () => {
    this.setState({ sideNavOpen: false });
  };
  render() {
    let overlay;

    if (this.state.sideNavOpen) {
      overlay = <Overlay click={this.overlayClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }} className="App">
        <Toolbar sideNavClickHandler={this.sideNavToggleClickHandler} />
        <SideNav show={this.state.sideNavOpen} />
        {overlay}
        <main style={{ marginTop: "64px" }}></main>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/categories" exact={true} component={Category} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
