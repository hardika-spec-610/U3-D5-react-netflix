import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import "../Component/componentStyles.css";

class Footer extends Component {
  render() {
    return (
      <>
        <FiFacebook color="#737373" size="24px" />
        <FiInstagram color="#737373" size="24px" className="mx-3" />
        <FiTwitter color="#737373" size="24px" />
        <FiYoutube color="#737373" size="24px" className="mx-3" />
        <Row className="mt-3">
          <Col xs={12} sm={6} md={4} lg={3}>
            <a href="#audio" className="ftr-link d-block py-1">
              Audio and Subtitles
            </a>
            <a href="#media" className="ftr-link d-block py-1">
              Media Center
            </a>
            <a href="#privacy" className="ftr-link d-block py-1">
              Privacy
            </a>
            <a href="#contactUs" className="ftr-link d-block py-1">
              Contact Us
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <a href="#Link" className="ftr-link d-block py-1">
              Audio Description
            </a>
            <a href="#Link" className="ftr-link d-block py-1">
              Investor Relations
            </a>
            <a href="#Link" className="ftr-link d-block py-1">
              Legal Notices
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <a href="#Link" className="ftr-link d-block py-1">
              Help Center
            </a>
            <a href="#Link" className="ftr-link d-block py-1">
              Jobs
            </a>
            <a href="#Link" className="ftr-link d-block py-1">
              Cookies Preferences
            </a>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <a href="#Link" className="ftr-link d-block py-1">
              Git Cards
            </a>
            <a href="#Link" className="ftr-link d-block py-1">
              Terms of Use
            </a>
            <a href="#Link" className="ftr-link d-block py-1">
              Corporate Information
            </a>
          </Col>
        </Row>
        <Button variant="outline-dark" className="btn btn-outline-dark mt-4">
          Service Code
        </Button>
        <span className="d-block copyright-font my-3">
          © 2023 Netflix made by Hardika
        </span>
      </>
    );
  }
}
export default Footer;
