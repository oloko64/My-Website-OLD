import './css/defaults.css';
import Home from './Home';
import About from './About';
import { Route, Switch } from 'react-router-dom';
import Portifolio from './Portifolio';
import Curiosidades from './Curiosidades'
import Certificados from './Certificados'
import Recomendados from './Recomendados'


function App() {
  return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/sobre" component={About}></Route>
          <Route path="/portifolio" component={Portifolio}></Route>
          {/* <Route path="/curiosidades" component={Curiosidades}></Route> PRECISA ACABAR*/}
          <Route path="/livros-recomendados" component={Recomendados}></Route>
          <Route path="/certificados" component={Certificados}></Route>
          <Route component={Home}></Route>
        </Switch>
      </div>
  );
}

export default App;