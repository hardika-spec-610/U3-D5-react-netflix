import { Container, Dropdown, Form, Nav, Navbar, Row } from "react-bootstrap";
import "../App";
import { BsSearch, BsBellFill } from "react-icons/bs";
import "../Component/componentStyles.css";
import { Link, useLocation } from "react-router-dom";

const NavbarComponent = ({ logo, accountLogo }) => {
  const location = useLocation();
  console.log("location object:", location);
  return (
    <Navbar className="navbar navbar-dark nav-bg px-0" expand="lg">
      <Container fluid className="px-5">
        <Navbar.Brand>
          <img src={logo} alt="netflix logo" width="110px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Link to="/tv-shows">
              <span
                className={
                  location.pathname === "/tv-shows"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Tv Shows
              </span>
            </Link>
            <Nav.Link>Movies</Nav.Link>
            <Nav.Link>Recently Added</Nav.Link>
            <Nav.Link>My List</Nav.Link>
          </Nav>
          <Form inline>
            <Row className="d-flex align-items-center">
              <BsSearch />
              <Nav.Link href="#kids">KIDS</Nav.Link>
              <BsBellFill />
              <Dropdown className="btn-group">
                <Dropdown.Toggle className="dropdown-btn" id="dropdown-basic">
                  <img src={accountLogo} alt="kids icon" width="24px" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                  <Dropdown.Item href="#">Edit Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Account Settings
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
