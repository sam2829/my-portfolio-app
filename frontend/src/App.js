import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/About/AboutPage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
