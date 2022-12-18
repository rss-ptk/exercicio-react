import Item from './Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function ListaTimes() {
    return(
        <Row className="mt-5">
            <Col xs={6} md={6} lg={6}>
                <h2>10 melhores times de futebol</h2>
                <ListGroup as="ol" numbered>
                    <Item item="Palmeiras"></Item>
                    <Item item="Liverpool"></Item>
                    <Item item="Flamento"></Item>
                    <Item item="Atlético Mineiro"></Item>
                    <Item item="Chelsea"></Item>
                    <Item item="PSV Eindhoven"></Item>
                    <Item item="Real Madrid"></Item>
                    <Item item="Manchester City"></Item>
                    <Item item="Rangers"></Item>
                    <Item item="Athetico Paranense"></Item>
                </ListGroup>
            </Col>
        </Row>
    )
}

export default ListaTimes;