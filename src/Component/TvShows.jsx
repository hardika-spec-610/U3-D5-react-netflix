import { Component } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import { BsDice4, BsJustifyLeft } from "react-icons/bs";
import "../Component/componentStyles.css";

class TvShows extends Component {
  render() {
    return (
      <Row className="mt-5">
        <Col xs={6} sm={6} md={6} lg={6}>
          <div className="d-flex">
            <h2 className="mr-4">TV Shows</h2>
            <Dropdown className="btn-group">
              <Dropdown.Toggle className="dropdown-btn" id="dropdown-basic">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                <Dropdown.Item href="#/action-1">Edit Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Account Settings
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <div className="text-right">
            <BsJustifyLeft
              className="border-color px-1 mr-1 py-1"
              size="28px"
            />
            <BsDice4 className="border-color px-1 py-1" size="28px" />
          </div>
        </Col>
      </Row>
    );
  }
}
export default TvShows;
