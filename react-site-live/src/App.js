import './css/defaults.css';
import Home from './Home';
import About from './About';
import { Route, Link } from 'react-router-dom';
import Portifolio from './Portifolio';
import Curiosidades from './Curiosidades'
import Certificados from './Certificados'
import Recomendados from './Recomendados'


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/sobre" component={About}></Route>
      <Route exact path="/portifolio" component={Portifolio}></Route>
      <Route exact path="/curiosidades" component={Curiosidades}></Route>
      <Route exact path="/links-recomendados" component={Recomendados}></Route>
      <Route exact path="/certificados" component={Certificados}></Route>
    </div>
  );
}

export default App;