import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Button variant="dark" className="m-btn mt-5">
      <Link to="/tv-shows">Go to Tv-Show Page</Link>
    </Button>
  );
};
export default Home;
