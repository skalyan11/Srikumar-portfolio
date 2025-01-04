import logo from './logo.svg';
import './App.css';
import {NavbarComponent} from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Banner />
    </div>
  );
}

export default App;
