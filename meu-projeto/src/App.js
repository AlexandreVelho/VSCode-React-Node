import './App.css';
import HellowWorld from './components/HellowWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome'; // Removi o ponto extra antes de /components
import { useState } from 'react';
import Saudacao from './components/Saudacao';

function App() {
  const [nome, setNome] = useState(); // Aqui está a declaração correta

  const meusItens = []; // Declaração da lista vazia

  const name = 'Matheus';
  const newName = name.toLocaleUpperCase();

  function sum(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero="1" />
      <Evento numero="2" />
      <Form />

      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <HellowWorld />
      <SayMyName nome="Matheus" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <List />
      <h1>Renderizando Condicional</h1>
      <Condicional />
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens} />
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  );
}

export default App;
