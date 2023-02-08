import { ListGroup, ListGroupItem } from "react-bootstrap";

const MovieDetailsListGroup = ({ selectedMovieDetails }) => {
  return (
    <ListGroup>
      <ListGroupItem className="list-bg">
        Year:
        <span className="detail-text2 ml-2"> {selectedMovieDetails.Year}</span>
      </ListGroupItem>
      <ListGroupItem className="list-bg">
        Released on:
        <span className="detail-text2 ml-2">
          {selectedMovieDetails.Released}
        </span>
      </ListGroupItem>
      <ListGroupItem className="list-bg">
        Actors:
        <span className="detail-text2 ml-2">{selectedMovieDetails.Actors}</span>
      </ListGroupItem>
      <ListGroupItem className="list-bg">
        Genre:
        <span className="detail-text2 ml-2">{selectedMovieDetails.Genre}</span>
      </ListGroupItem>
      <ListGroupItem className="list-bg">
        Country:{" "}
        <span className="detail-text2 ml-2">
          {selectedMovieDetails.Country}
        </span>
      </ListGroupItem>
      <ListGroupItem className="list-bg">
        Language:
        <span className="detail-text2 ml-2">
          {selectedMovieDetails.Language}
        </span>
      </ListGroupItem>
      <ListGroupItem className="list-bg">
        imdbVotes:{" "}
        <span className="detail-text2 ml-2">
          {selectedMovieDetails.imdbVotes}
        </span>
      </ListGroupItem>
      {selectedMovieDetails.totalSeasons && (
        <ListGroupItem className="list-bg">
          Total Seasons:
          <span className="detail-text2 ml-2">
            {selectedMovieDetails.totalSeasons}
          </span>
        </ListGroupItem>
      )}
    </ListGroup>
  );
};
export default MovieDetailsListGroup;
