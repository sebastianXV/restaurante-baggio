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
                            <a href="https://www.linkedin.com" className="btn btn-outline-light btn-floating m-1" role="button">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.github.com" className="btn btn-outline-light btn-floating m-1" role="button">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </Col>
                    </Row>
                </Container>

                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; 2023 Your Website. All rights reserved.
                </div>
            </footer>

    );
}

export default Footer;