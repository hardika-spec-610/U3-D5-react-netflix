import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Component/NavbarComponent";
import netflixLogo from "./assets/netflix_logo.png";
import accountLogo from "./assets/kids_icon.png";
import { Container } from "react-bootstrap";
import Gallery1 from "./Component/Gallery1";

function App() {
  return (
    <div className="App">
      <header>
        <NavbarComponent logo={netflixLogo} accountLogo={accountLogo} />
      </header>
      <Container fluid className="px-5 pb-5">
        <Gallery1 name="harry potter" title="Harry Potter" />
        <Gallery1 name="Lord of the Rings" title="Lord of the Rings" />
      </Container>
    </div>
  );
}

export default App;
