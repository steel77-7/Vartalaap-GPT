import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Main from "./Components/Main"
import Home from './Pages/Home';
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
