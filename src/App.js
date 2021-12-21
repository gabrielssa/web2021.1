import logo from './logo.svg';
import './App.css';
import Pesquisa from './components/Pesquisa';
import ItemDaPesquisa from './components/ItemDaPesquisa/ItemDaPesquisa'

function App() {
  return (
    <div className="App">
        <header>
          <h1 id="meuh1">Gamer Party</h1>
          <Pesquisa id="barraDePesquisa"/>
        </header>
        <nav>
          <ul>
            <p>Jogadores Curtidos</p>
            <p>Meus Jogos</p>
          </ul>
        </nav>
        <main>
          <h1>Jogos Populares</h1>
          <div className="jogo">
            <img src="https://upload.wikimedia.org/wikipedia/pt/6/66/WarcraftIII.jpg" alt="warcraft" class="game-img"></img>
            <p>Nome: Warcraft III</p>
            <p>Jogadores: 134</p>
          </div>
          <div className="jogo">
            <img src="https://image.api.playstation.com/cdn/EP0688/CUSA06782_00/4Fn75AWWgOLZiFdxIA6HvSV5wC9c3WGp.png" alt="ark-survival" class="game-img"></img>
            <p>Nome: Ark Survival Evolved</p>
            <p>Jogadores: 234</p>
          </div>
        </main>

        <footer>Gamer Party 2021</footer>
    </div>
  );
}

export default App;
