import './App.css'
import Pessoa from './components/Pessoa';
import Foto from './assets/74269.jpgmaior.jpg';

function App() {
  return (
    <div className="App">
      <h1>Meu perfil</h1>
      <Pessoa 
        nome="David"
        idade="20"
        telefone="(13)996659103"

        hobbie1="Tocar violão"
        hobbie2="Jogar basquete"
        hobbie3="Jogar videogame"

        musica1="They not like us - Kendrick Lamar"
        musica2="Keep ya head up - 2Pac"

        artista1="2Pac"
        artista2="Kendrick Lamar"
        artista3="Nas"

        foto={Foto}
      />
    </div>
  )
}

export default App
