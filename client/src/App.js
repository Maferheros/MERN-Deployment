import './App.css';
import NewPirata from './Componentes/NewPirata/NewPirata';
import ShowPirata from './Componentes/ShowPirata/ShowPirata';
import ListPirata from './Componentes/ListPirata/ListPirata';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path = "/pirate/new" render= { (routeProps) => <NewPirata {...routeProps}/>}/>
      <Route exact path= {"/pirate/:id"} render= { (routeProps) => <ShowPirata {...routeProps} />}/>
      <Route path = "/pirates" render= { (routeProps) => <ListPirata {...routeProps}/>}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
