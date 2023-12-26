import "./App.css";
import { NavBar, Home, Projects } from "./Components";
import AboutMe from "./Components/AboutMe";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <NavbarDefault /> */}
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactUs />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
