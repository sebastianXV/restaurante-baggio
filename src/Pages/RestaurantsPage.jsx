import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Componentes/Header';
import BodyHome from '../Componentes/Body/BodyRestaurants';
import Footer from '../Componentes/Footer';

function RestaurantsPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <BodyHome />
      </div>
      <Footer />
    </div>
  );
}

export default RestaurantsPage;

