import logo from './logo.svg';
import './App.css';
import Home from './components/index'
import { CssBaseline } from '@material-ui/core';
import {
  Route,Switch
} from "react-router-dom";
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
    <CssBaseline />
    <Switch>
    <Route exact path = '/' component={Home}/>
    <Route   path = '/resume' component={Resume}/>
    <Route   path = '/portfolio' component={Portfolio}/>
    </Switch>
    </>
  );
}

export default App;
