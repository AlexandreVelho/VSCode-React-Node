import './App.css';

function App() {
  const name = 'Matheus'
  const newName = name.toLocaleUpperCase()
  function sum(a, b) {
    return a + b
  }
  const url = "htpps://via.placeholder.com/150"
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
