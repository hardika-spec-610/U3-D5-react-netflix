import { Col, Dropdown, Row } from "react-bootstrap";
import { BsDice4, BsJustifyLeft } from "react-icons/bs";
import "../Component/componentStyles.css";
import Gallery1 from "./Gallery1";

const TvShows = () => {
  return (
    <>
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
      <Gallery1 name="harry potter" title="Harry Potter" />
      <Gallery1 name="Lord of the Rings" title="Lord of the Rings" />
      <Gallery1 name="Titanic" title="Titanic" />
      <Gallery1 name="Back to the Outback" title="Back to the Outback" />
      <Gallery1 name="Squid Game" title="Squid Game" />
    </>
  );
};

export default TvShows;
