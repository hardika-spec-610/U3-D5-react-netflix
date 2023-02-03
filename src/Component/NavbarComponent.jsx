import { Component } from "react";
import {
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import "../App";
import { BsSearch, BsBellFill } from "react-icons/bs";
import "../Component/componentStyles.css";

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-dark nav-bg px-0" expand="lg">
        <Container fluid className="px-5">
          <Navbar.Brand href="#home">
            <img src={this.props.logo} alt="netflix logo" width="110px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Tv Shows</Nav.Link>
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">Recently Added</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <Row className="d-flex align-items-center">
                <BsSearch />
                <Nav.Link href="#kids">KIDS</Nav.Link>
                <BsBellFill />
                <Dropdown className="btn-group">
                  <Dropdown.Toggle className="dropdown-btn" id="dropdown-basic">
                    <img
                      src={this.props.accountLogo}
                      alt="kids icon"
                      width="24px"
                    />
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
  }
}

export default NavbarComponent;
