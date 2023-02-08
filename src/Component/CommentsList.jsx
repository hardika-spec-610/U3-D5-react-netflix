import { Button, Card, ListGroup } from "react-bootstrap";
import "../Component/componentStyles.css";

const CommentsList = ({ commentArray }) => {
  return (
    <>
      {commentArray.map((singleComment) => (
        <Card key={singleComment._id} className="card-bg mx-auto">
          <Card.Header>Author: {singleComment.author}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className="list-bg">
              Comment: {singleComment.comment}
            </ListGroup.Item>
            <ListGroup.Item className="list-bg">
              Rating: {singleComment.rate}
            </ListGroup.Item>
            <ListGroup.Item className="list-bg">
              <Button variant="danger">Delete</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </>
  );
};
export default CommentsList;
