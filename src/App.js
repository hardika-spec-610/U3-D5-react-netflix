import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Component/NavbarComponent";
import netflixLogo from "./assets/netflix_logo.png";
import accountLogo from "./assets/kids_icon.png";
import { Container } from "react-bootstrap";
import TvShows from "./Component/TvShows";
import Footer from "./Component/Footer";
import "./Component/componentStyles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound404 from "./Component/NotFound404";
import MovieDetails from "./Component/MovieDetails";
import Home from "./Component/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavbarComponent logo={netflixLogo} accountLogo={accountLogo} />
        </header>
        <Container fluid className="px-5 pb-5">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<TvShows />} path="/tv-shows" />
            <Route element={<MovieDetails />} path="/details/:movieId" />
            <Route element={<NotFound404 />} path="*" />
          </Routes>
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
