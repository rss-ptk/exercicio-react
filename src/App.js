import 'bootstrap/dist/css/bootstrap.min.css';

import ListaTimes from './components/ListaTimes';
import ListaJogadores from './components/ListaJogadores';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Container>

        <ListaTimes/>

        <ListaJogadores/>

      </Container>
      
    </div>
  );
}

export default App;
