import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantsPage from './Pages/RestaurantsPage';
import NewPage from './Pages/NewPage';
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RestaurantsPage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


