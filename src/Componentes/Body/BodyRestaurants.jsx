import { Row, Card, Col, Container } from 'react-bootstrap';


function BodyHomePage() {
    return (
        <Container style={{margin: '25px 25px'}}>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src= "Img/Img-card1.webp" />
                            <Card.Body>
                                <Card.Title>Restaurante</Card.Title>
                                <Card.Text>
                                    Direccion del Restaurante
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BodyHomePage;