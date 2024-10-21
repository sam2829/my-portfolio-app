import './App.css';
import styles from "./App.module.css"
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className={styles.App}>
      <div>
        <p>
          This is my app
        </p>
      </div>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
