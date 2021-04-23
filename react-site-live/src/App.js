import './css/defaults.css';
import Home from './Home';
import About from './About';
import { Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/sobre" component={About}></Route>
    </div>
  );
}

export default App;