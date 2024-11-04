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
import Footer from "./components/Footer";
import PortfolioDetailPage from "./pages/Portfolio/PortfolioDetailPage";
import AlertMessage, { useAlert } from "./components/AlertMessage";
import NotFoundPage from "./pages/ErrorPage/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // to show alert message
  const { alert, showAlert, hideAlert } = useAlert();

  return (
    <div className={styles.App}>
      <Router>
        {/* ensure new pages load at the top */}
        <ScrollToTop />
        {/* import navbar */}
        <NavBar />
        {/** Display the show alert message */}
        {alert && (
          <AlertMessage
            variant={alert.variant}
            message={alert.message}
            showAlert={showAlert}
            onClose={hideAlert}
          />
        )}
        <Routes>
          {/* import pages and their paths */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
          <Route
            path="/contact"
            element={<ContactPage showAlert={showAlert} />}
          />
          {/* render not found 404 page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* import footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
