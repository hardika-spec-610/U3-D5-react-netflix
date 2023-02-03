import { Component } from "react";
import { Alert, Card, Col, Row, Spinner } from "react-bootstrap";
// import { BsChatSquareText, BsPlayCircle, BsPlus } from "react-icons/bs";

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
        this.setState({ ...this.state, isLoading: false, isError: true });
      }
    } catch (e) {
      console.error(e);
      this.setState({ ...this.state, isLoading: false, isError: true });
    }
  };

  render() {
    return (
      <div>
        <h3 className="heading">{this.props.title} Gallery</h3>

        <Row>
          {this.state.errMessage && (
            <Alert variant="danger">{this.state.errMessage}</Alert>
          )}

          {this.state.isLoading && <Spinner animation="grow" />}

          {this.state.movies.slice(0, 4).map((movie) => (
            <Col sm={6} md={3} key={movie.imdbID}>
              <Card className="Cards">
                <Card.Img variant="top" src={movie.Poster} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      //   <div id="movie-row" class="row">

      //     <div class="col-12 py-3 col-sm-6 py-sm-2 col-md-4 py-md-2 col-lg-2 px-1 ">
      //       <div class="movie-card">
      //         <img
      //           class="w-100"
      //           src={this.props.src}
      //           alt={this.props.src}
      //           width="350px"
      //           height="200px"
      //         />
      //         <div class="infos-container">
      //           <div class="d-flex mb-3 mt-4 align-items-center">
      //             <BsPlayCircle className="mr-2" />

      //             {/* <i class="bi bi-play-circle mr-2 "></i> */}
      //             <span>Play S8 E7</span>
      //             <BsPlus className="ml-auto plus-btn" />
      //             {/* <i class="bi bi-plus-lg ml-auto plus-btn"></i> */}
      //           </div>
      //           <h6 class="pime-title">{this.props.src}</h6>

      //           <p>{this.props.src}</p>
      //           <div class="card-movie-footer d-flex align-items-center">
      //             <span class="mr-2">{this.props.src}</span>
      //             <span class="mr-2">2012</span>
      //             <BsChatSquareText className="mr-2" />
      //             {/* <i class="bi bi-chat-square-text mr-2"></i> */}
      //             <div>13+</div>
      //           </div>

      //         </div>
      //       </div>
      //     </div>
      //   </div>
    );
  }
}

export default Gallery1;
