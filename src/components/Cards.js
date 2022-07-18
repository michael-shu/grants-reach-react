import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Cards(props) {

    return (
        <Col md={4}>
            <Card>
                <Card.Body>
                    <Card.Title>
                        <div className="image-container">
                            <img src={props.image} className="icon" />
                        </div>
                        <h5>{props.title}</h5>
                    </Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default Cards;