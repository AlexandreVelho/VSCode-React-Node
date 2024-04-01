import './App.css';
import HellowWorld from './components/HellowWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa'; // Corrigi o nome do componente importado
import Contato from './pages/Contato'; // Corrigi o nome do componente importado
import { useState } from 'react';

function App() {
  const [nome, setNome] = useState();
  const meusItens = [];
  const name = 'Matheus';
  const newName = name.toLocaleUpperCase();

  function sum(a, b) {
    return a + b;
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/empresa">
            <Empresa />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
