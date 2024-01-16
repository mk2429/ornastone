import logo from './logo.svg';
import './App.css';
import HomePage from './page/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
