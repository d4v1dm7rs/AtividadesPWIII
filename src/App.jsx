import './App.css'
import MyName from './components/MyName'
import Pessoa from './components/Pessoa';

function App() {



  return (
    <div className="App">
      <h1>Trabalhando com Propriedades</h1>
      <Pessoa 
        nome="David"
        idade="20"
        profissão="Programador"
      />
    </div>
  )
}

export default App
