import { useState, useRef } from 'react'

import './App.css'

function Chat({children}) {
  return <div className="chat"> {children} </div>
}


function App() {
  const [messaggi, setMessaggi] = useState('')
  const messaggio = useRef(null)

  const addMessaggio = () => {
    if (messaggio.current) {
      const nuovoMessaggio = messaggio.current.value
      if (nuovoMessaggio.trim() !== '') {
        setMessaggi(messaggi + "<br>"+ nuovoMessaggio)
        messaggio.current.value = ''
      }
    }
  }

  return <>
    <Chat>
      {messaggi}
    </Chat>
    <div>
      <input type='text' ref={messaggio} />
      <button onClick={addMessaggio}>Invia</button>
    </div>
  </>
}

export default App
