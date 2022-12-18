import Jogador from '././Jogador';
import Row from 'react-bootstrap/Row';

const url = "https://via.placeholder.com/150";

function ListaJogadores() {
    return(
        <Row className="mt-5">
            <h2>Jogadores</h2>
            <Jogador
                nome="Lionel Messi"
                idade="34"
                time="PSG"
                foto={url}
                />
            <Jogador
                nome="LeBron James"
                idade="37"
                time="Los Angeles Lakers"
                foto={url}
                />
            <Jogador
                nome="Cristiano Ronaldo"
                idade="37"
                time="Manchester United"
                foto={url}
                />
            <Jogador
                nome="Neymar"
                idade="30"
                time="PSG"
                foto={url}
                />
            <Jogador
                nome="Stephen Curry"
                idade="34"
                time="Golden State Warriors"
                foto={url}
                />
            <Jogador
                nome="Kevin Durant"
                idade="33"
                time="Brooklyn Nets"
                foto={url}
                />
            <Jogador
                nome="Tom Brady"
                idade="44"
                time="Tampa Bay Buccaneers"
                foto={url}
                />
            <Jogador
                nome="Giannis Antetokounmpo"
                idade="27"
                time="Milwaukee Bucks"
                foto={url}
                />
        </Row>
    )
}

export default ListaJogadores;