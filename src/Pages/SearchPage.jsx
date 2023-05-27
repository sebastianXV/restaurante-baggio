import Header from '../Componentes/Header';
import BodySearch from '../Componentes/Body/BodySearch';
import Footer from '../Componentes/Footer';

function SearchPage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="flex-grow-1 d-flex justify-content-center align-items-start" style={{marginTop: '25px'}}>
                <BodySearch />
            </div>
            <Footer />
        </div>
    );
}

export default SearchPage;