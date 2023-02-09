import { Button, Col } from "react-bootstrap";
import { BsChatSquareText, BsPlayCircle, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const CarouselItem = ({ id, poster, title, movieType, movieYear, movieId }) => {
  return (
    <Col key={id} xs={12} sm={6} md={3} lg={2} className="px-1 mb-4 ">
      <div className="movie-card">
        <img
          className="d-block w-100"
          src={poster}
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
          <h6 className="movie-title text-left">{title}</h6>

          <div className="card-movie-footer d-flex align-items-center">
            <span className="mr-2">{movieType}</span>
            <span className="mr-2">{movieYear}</span>
            <BsChatSquareText className="mr-2" />
          </div>
          <Link to={"/details/" + movieId}>
            <Button variant="dark" className="m-btn py-1 mt-3">
              More Details
            </Button>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default CarouselItem;
