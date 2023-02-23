import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [players, setPlayers] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL + "/players")
    fetch(
      import.meta.env.VITE_API_URL + "/players"
    )
      .then(res => res.json())
      .then(response => {
        setPlayers(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1 className='tw-text-3xl tw-font-bold tw-underline'>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
