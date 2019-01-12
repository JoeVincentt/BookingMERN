import React, { Component } from "react";
import {} from "react-router-dom";
import { Carousel } from "react-materialize";

class Bookings extends Component {
  render() {
    return (
      <Carousel
        options={{ fullWidth: true }}
        images={[
          "https://lorempixel.com/800/400/food/1",
          "https://lorempixel.com/800/400/food/2",
          "https://lorempixel.com/800/400/food/3",
          "https://lorempixel.com/800/400/food/4",
          "https://lorempixel.com/800/400/food/5"
        ]}
      />
    );
  }
}

export default Bookings;
