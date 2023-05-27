import { Button, Form, Container } from "react-bootstrap";

function BodyNew() {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Imagen URL</Form.Label>
                    <Form.Control type="password" placeholder="" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </Container>
    );
}

export default BodyNew;