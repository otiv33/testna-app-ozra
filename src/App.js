import './App.css';
import SerbusCounter from './components/SerbusCounter/SerbusCounter';
import SeznamZelja from './components/SeznamZelja/SeznamZelja';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
        <SeznamZelja naslov="Seznam želja" navodilo="Kaj si želimo? 🤷"></SeznamZelja>
      </div>
    </div>
  );
}

export default App;