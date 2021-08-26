import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Containers/Home/Home';
import AddArticle from './Containers/AddArticle/AddArticle'
import Article from './Containers/Article/Article'
import Contact from './Containers/Contact/Contact'
import NotFound from './Containers/NotFound/NotFound'
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";

function App() {
  return (
    <div className="App">     

      <Router basename={process.env.PUBLIC_URL}>
      <Navbar/>
        <Switch>          
          <Route path="/add-article" exact component={AddArticle} />
          <Route path="/article/:slug" exact component={Article} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact  component={Home} />
          <Route path="/"  component={NotFound} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
