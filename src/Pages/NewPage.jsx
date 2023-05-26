import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Componentes/Header';
import BodyNew from '../Componentes/BodyNew';
import Footer from '../Componentes/Footer';


function NewPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <BodyNew />
      </div>
      <Footer />
    </div>
  );
}

export default NewPage;