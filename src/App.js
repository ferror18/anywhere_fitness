import './App.css';
import Home from './views/Home';
import { BrowserRouter, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './theme';

function App() {
  console.log(theme);
  return (
    <>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Route exact path='/' component={Home}/>
    </ThemeProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
 