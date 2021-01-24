import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import { BrowserRouter, Route } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <>
    <BrowserRouter>
    <CssBaseline/>
    <Route exact path='/' component={Home}/>
    </BrowserRouter>
    </>
  );
}

export default App;
 