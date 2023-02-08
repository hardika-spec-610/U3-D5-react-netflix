import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Component/NavbarComponent";
import netflixLogo from "./assets/netflix_logo.png";
import accountLogo from "./assets/kids_icon.png";
import { Container } from "react-bootstrap";
import Gallery1 from "./Component/Gallery1";
import TvShows from "./Component/TvShows";
import Footer from "./Component/Footer";
import "./Component/componentStyles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound404 from "./Component/NotFound404";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavbarComponent logo={netflixLogo} accountLogo={accountLogo} />
        </header>
        <Container fluid className="px-5 pb-5">
          <Routes>
            <Route element={<TvShows />} path="/tv-shows" />
            <Route element={<NotFound404 />} path="*" />
          </Routes>
          <Gallery1 name="harry potter" title="Harry Potter" />
          <Gallery1 name="Lord of the Rings" title="Lord of the Rings" />
          <Gallery1 name="Titanic" title="Titanic" />
          <Gallery1 name="Back to the Outback" title="Back to the Outback" />
          <Gallery1 name="Squid Game" title="Squid Game" />
        </Container>
        <footer className="ftr-block">
          <Container fluid className="px-5">
            <Footer />
          </Container>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
