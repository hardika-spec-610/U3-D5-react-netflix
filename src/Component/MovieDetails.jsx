import { useEffect, useState } from "react";
import { Alert, Badge, Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "../Component/componentStyles.css";
import CommentsList from "./CommentsList";
import MovieDetailsListGroup from "./MovieDetailsListGroup";

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const params = useParams();
  console.log("PARAMS ARE: ", params);
  console.log("the id of the chosen movie is", params.movieId);

  const movieInfoComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2FjZGU3MzczODAwMTUzNzQzOGIiLCJpYXQiOjE2NzU3NzY5MjAsImV4cCI6MTY3Njk4NjUyMH0.iZkEz1pTQD0UwdN8qkuX43GlGjgs5ctxQ9BiOCPjau4",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let movieData = await response.json();
        console.log("movieData", [movieData]);
        console.log("movieData2", movieData);
        setComment(movieData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (e) {
      console.error(e);
      setIsLoading(false);
      setIsError(true);
    }
  };

  const getMovieDetails = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=19510134&i=${params.movieId}`
      );
      if (response.ok) {
        let movieDetails = await response.json();
        console.log("movieData2", movieDetails);
        setSelectedMovie(movieDetails);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getMovieDetails();
    movieInfoComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //   useEffect(() => {
  //     getMovieDetails();
  //     movieInfoComments();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [movieId]);

  return (
    <div className="pt-5 details-card mx-auto">
      {isLoading && ( // isLoading is true or false
        <Spinner animation="border" variant="success" />
      )}
      {isError && <Alert variant="danger">Aww snap, we got an error!😨</Alert>}

      <Card className="card-bg ">
        <Row className="no-gutters">
          <Col className="col-md-4">
            <Card.Img src={selectedMovie.Poster} width="200px" height="100%" />
          </Col>
          <Col className="col-md-8">
            <Card.Body variant="dark">
              <Card.Title className="movie-title2">
                {selectedMovie.Title}{" "}
              </Card.Title>
              <Badge variant="warning" className="warning-badge p-2">
                imdb Rating: {selectedMovie.imdbRating}
              </Badge>
              <Card.Text></Card.Text>
            </Card.Body>
            <MovieDetailsListGroup selectedMovieDetails={selectedMovie} />

            <Link to="/tv-shows">
              <Button
                className="tv-show-btn mt-3"
                variant="dark"
                size="lg"
                block
              >
                Tv Show
              </Button>
            </Link>
          </Col>
        </Row>
      </Card>
      <h4 className="mt-5">Comments</h4>
      {comment.length > 0 && comment ? (
        <CommentsList commentArray={comment} />
      ) : (
        "Not comments yet available"
      )}
    </div>
  );
};

export default MovieDetails;
