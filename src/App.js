import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import {AddUser}  from './Component/Users/AddUser';
import {Edit}  from './Component/Users/Edit';
import View from './Component/Users/View';



function App() {
  return (
    <div className="App">
     <Router>
    <Navbar />
    <Switch>
    <Route path="/home">
      <Home/>
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/adduser">
    <AddUser/>
  </Route>
  <Route path="/edit/:id">
    <Edit/>
  </Route>
  <Route path="/view/:id">
    <View />
  </Route>
  </Switch>

    </Router>
    </div>
  );
}

export default App;
