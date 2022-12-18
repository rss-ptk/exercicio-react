import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';

function Jogador({nome, idade, time, foto}) {
    return(
        <Col xs={6} md={4} lg={3} className="mb-4">
            <Card>
            <Card.Img variant="top" src={foto} alt={nome}/>
            <Card.Body>
            <Card.Title>{nome}</Card.Title>
            <Card.Text>
                {idade} anos, joga no {time}
            </Card.Text>
            </Card.Body>
        </Card>
      </Col>
    )
}

export default Jogador;