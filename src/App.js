import "./App.css";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import FixSocialIcon from "./components/SocialIcon/FixSocialIcon";

function App() {
  return (
    <Router>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </Router>
  );
}

export default App;
