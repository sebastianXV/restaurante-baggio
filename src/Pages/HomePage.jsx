import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Componentes/Header';
import BodyHome from '../Componentes/BodyHome';
import Footer from '../Componentes/Footer';

function HomePage() {
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

export default HomePage;

