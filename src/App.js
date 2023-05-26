import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NewPage from './Pages/NewPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


