
import './App.css';
import Accueil from './Components/Accueil'
import Contact from './Components/Contact'
import Projet from './Components/Projet'
import Nav from './Components/Nav/Nav'
import NotFound from './Components/NotFound'
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Nav/>
        <Switch>          
          <Route path="/projet" exact component={Projet} />
          <Route path="/projet/:slug" exact component={Projet} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact  component={Accueil} />
          <Route path="/"  component={NotFound} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
