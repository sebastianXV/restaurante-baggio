import { Row, Col, Container } from 'react-bootstrap';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
            <footer className="bg-dark text-center text-white">
                <Container className="p-4 pb-0">
                    <Row className="mb-4">
                        <Col>
                            <a href="https://www.facebook.com" className="btn btn-outline-light btn-floating m-1" role="button">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.twitter.com" className="btn btn-outline-light btn-floating m-1" role="button">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.google.com" className="btn btn-outline-light btn-floating m-1" role="button">
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.instagram.com" className="btn btn-outline-light btn-floating m-1" role="button">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.linkedin.com/in/sebastian-rojas-2ba603245" className="btn btn-outline-light btn-floating m-1" role="button">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </Col>
                        <Col>
                            <a href="https://github.com/sebastianXV" className="btn btn-outline-light btn-floating m-1" role="button">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </Col>
                    </Row>
                </Container>

            </footer>

    );
}

export default Footer;