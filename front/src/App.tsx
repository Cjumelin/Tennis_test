import { useState, useEffect } from 'react'
import './App.css'
import { Loading } from './components/loading';
import { Versus } from './components/versus';
import { Player } from "./types/players.type";

function App() {
  const [players, setPlayers] = useState(null);

  const fetchPlayers = async () => {
    const res = await fetch(import.meta.env.VITE_API_URL + "/players")
    const players = await res.json()
    setPlayers(players)

  }

  useEffect(() => {
    fetchPlayers()
  }, []);

  return players && (<div className="App">
      <Versus players={players as unknown as Player[]}/>
    </div>)
  
}

export default App
