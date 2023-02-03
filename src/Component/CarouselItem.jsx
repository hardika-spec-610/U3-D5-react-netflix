import { Component } from "react";
import { Col } from "react-bootstrap";
import { BsChatSquareText, BsPlayCircle, BsPlus } from "react-icons/bs";

class CarouselItem extends Component {
  render() {
    return (
      <Col
        key={this.props.id}
        xs={12}
        sm={6}
        md={3}
        lg={2}
        className="px-1 mb-4 movie-card"
      >
        <img
          className="d-block w-100"
          src={this.props.poster}
          alt="Movie Poster"
          width="300px"
          height="310px"
        />
        <div className="infos-container">
          <div className="d-flex mb-3 mt-4 align-items-center">
            <BsPlayCircle className="mr-2" />

            <span>Play S8 E7</span>
            <BsPlus className="ml-auto plus-btn" />
          </div>
          <h6 className="movie-title text-left">{this.props.title}</h6>

          <div className="card-movie-footer d-flex align-items-center">
            <span className="mr-2">{this.props.movieType}</span>
            <span className="mr-2">{this.props.movieYear}</span>
            <BsChatSquareText className="mr-2" />
          </div>
        </div>
      </Col>
    );
  }
}

export default CarouselItem;
