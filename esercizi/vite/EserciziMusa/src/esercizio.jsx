import { useState } from 'react'
import musaLogo from './assets/musa.svg'
import viteLogo from '/vite.svg'
import './esercizio.css'
import Chat from './chat.jsx';

function Esercizio() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://musaformazione.it" target="_blank">
          <img src={musaLogo} className="logo musa" alt="Musa logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h2>Le mie modifiche ai file originali</h2>
      <div className="caard">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-doocs"> 
        Clicca sul logo di Vite e di Musa to saperne di più
      </p>
         <Chat />
    </>
  )
}

export default Esercizio
