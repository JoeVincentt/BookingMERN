import React, { Component } from "react";
import {} from "react-router-dom";
import { Carousel } from "react-materialize";

class Bookings extends Component {
  render() {
    return (
      <Carousel
        images={[
          "https://lorempixel.com/250/250/nature/1",
          "https://lorempixel.com/250/250/nature/2",
          "https://lorempixel.com/250/250/nature/3",
          "https://lorempixel.com/250/250/nature/4",
          "https://lorempixel.com/250/250/nature/5"
        ]}
      />
    );
  }
}

export default Bookings;
