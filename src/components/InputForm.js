import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function InputForm() {

    return (
        <Form>
            <Form.Group>
                <Form.Label>NAME</Form.Label>
                <Form.Control type="text" placeholder="Name"></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" placeholder="Email"></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>ZIP CODE</Form.Label>
                <Form.Control type="" placeholder="Zip Code"></Form.Control>

            </Form.Group>

            <Button variant="dark" disabled>
                Submit
            </Button>

        </Form>
    );


}

export default InputForm;