
import './App.css';
import Modal from './Components/Modal/Modal'
import Accordion from './Components/Accordion/Accordion'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">

      <Navbar />

      <div className="content-body">
        <h1>Component useful</h1>
        <br/>
        <Modal />
        <Accordion />

      </div>



    </div>
  );
}

export default App;
