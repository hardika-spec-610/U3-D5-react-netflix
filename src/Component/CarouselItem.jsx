import { Component } from "react";
import { Carousel } from "react-bootstrap";

class CarouselItem extends Component {
  render() {
    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={this.props.posterArray.Poster}
          alt="Second slide"
        />
      </Carousel.Item>
    );
  }
}

export default CarouselItem;
