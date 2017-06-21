import React, { Component } from "react";
import Earth from "./Earth";
import Description from "./Description";
import "./CSS/App.css";

class Scene extends Component {
  render() {
    return (
      <div>
        <Earth
          className="Earth"
          lon={this.props.lon}
          lat={this.props.lat}
          global={this.props.global}
        />
        <Description title={this.props.title} text={this.props.text} />
      </div>
    );
  }
}

export default Scene;