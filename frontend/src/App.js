import {
  BrowserRouter as Router,
  // Routes,
  // Route,
  // useLocation,
} from "react-router-dom";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
