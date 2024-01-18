import './App.css';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li> <Link to= "/Home">Home</Link> </li>
          <li> <Link to= "/ContactUs">ContactUs</Link> </li>
          <li> <Link to= "/ListOfProduct">ListOfProduct</Link> </li>
          <li> <Link to= "/ListEmployee">ListEmployee</Link> </li>
          <li> <Link to= "/*">NoPage</Link> </li>

        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
