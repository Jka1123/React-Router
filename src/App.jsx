import {Link, Outlet} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <div className = "Otsikko">
    <h2>Welcome to React-Router</h2>
    </div>
     <div className = "App">
      <nav>
        <Link to = {"/"}>Home</Link>
        <Link to = {"/about"}>About</Link>
        <Link to = {"/contact"}>Contact</Link>
      </nav>
      <Outlet />
     </div>
     </>
  );
}

export default App
