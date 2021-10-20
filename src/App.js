import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Particle from "./components/particles";
import AboutMe from "./components/AboutMe";
import Services from "./components/services";
import Experiece from "./components/experiece";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Particle/>
      <Navbar />
      <Header />
      <AboutMe/>
      <Services/>
      <Experiece/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
