import logo from './logo.svg';
import './App.css';
import {NavbarComponent} from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import {Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
