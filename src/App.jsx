import Image from './Image.jsx'
import ben from './assets/ben.svg'
import fourArms from './assets/four-arms.svg'
import heatblast from './assets/heatblast.svg'
import xlr8 from './assets/xlr8.svg'
import './App.css'

const characters = [
  { name: 'Ben Tennyson', source: ben },
  { name: 'Four Arms', source: fourArms },
  { name: 'Heatblast', source: heatblast },
  { name: 'XLR8', source: xlr8 },
]

function App() {
  return (
    <div className="app">
      <header>
        <p className="eyebrow">MY FAVORITE CARTOON</p>
        <h1>BEN <span>10</span> CHARACTERS</h1>
        <p className="subtitle">Four favorites from the Ben 10 universe</p>
      </header>

      <main className="gallery">
        {characters.map((character) => (
          <div className="character-card" key={character.name}>
            <Image source={character.source} width={200} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        ))}
      </main>

      <footer>IT'S HERO TIME! <span aria-hidden="true">✦</span></footer>
    </div>
  )
}

export default App
