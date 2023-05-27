import { Button, Form, Container, Card } from "react-bootstrap";

function BodySearch() {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="email" placeholder="Italian" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Buscar
                </Button>
            </Form>
        </Container>
    );
}

export default BodySearch;