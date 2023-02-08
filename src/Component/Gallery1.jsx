import { Component } from "react";
import { Alert, Row, Spinner } from "react-bootstrap";
// import { BsChatSquareText, BsPlayCircle, BsPlus } from "react-icons/bs";
import "../Component/componentStyles.css";
import CarouselItem from "./CarouselItem";

class Gallery1 extends Component {
  state = {
    movies: [],
    isLoading: true, // now I want to bind the UI with it, the Spinner!
    isError: false,
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=19510134&s=${encodeURIComponent(
          this.props.name
        )}`
      );
      console.log(response);
      if (response.ok) {
        let movieData = await response.json();
        console.log("data", movieData);
        this.setState({ movies: movieData.Search, isLoading: false });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (e) {
      console.error(e);
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    return (
      <div className="mt-5">
        <h5 className="text-left">{this.props.title}</h5>
        <Row className="mb-4">
          {this.state.isError && (
            <Alert variant="danger">Aww snap, we got an error!😨</Alert>
          )}

          {this.state.isLoading && <Spinner animation="grow" />}
          {this.state.movies.slice(0, 6).map((movie) => (
            <CarouselItem
              poster={movie.Poster}
              title={movie.Title}
              movieType={movie.Type}
              movieYear={movie.Year}
              key={movie.imdbID}
              movieId={movie.imdbID}
            />
          ))}
          {/* <Carousel className="mb-5">
            {this.state.movies.slice(0, 3).map((movie) => (
              <Carousel.Item key={movie.imdbID}>
                <Row className="mx-0">
                  {this.state.movies.slice(0, 6).map((movie) => (
                    <Col
                      xs={12}
                      sm={6}
                      md={3}
                      lg={2}
                      className="px-1 movie-card"
                    >
                      <img
                        className="d-block w-100"
                        src={movie.Poster}
                        alt="Second slide"
                        width="300px"
                        height="310px"
                      />
                      <div class="infos-container">
                        <div class="d-flex mb-3 mt-4 align-items-center">
                          <BsPlayCircle className="mr-2" />

                          <span>Play S8 E7</span>
                          <BsPlus className="ml-auto plus-btn" />
                        </div>
                        <h6 class="pime-title">{this.props.src}</h6>

                        <p>{this.props.src}</p>
                        <div class="card-movie-footer d-flex align-items-center">
                          <span class="mr-2">{this.props.src}</span>
                          <span class="mr-2">2012</span>
                          <BsChatSquareText className="mr-2" />
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel> */}
        </Row>
      </div>
    );
  }
}

export default Gallery1;
