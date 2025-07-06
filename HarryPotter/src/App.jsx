import {useState} from 'react'
import { getBooksMock } from './Services/Characters'

import { MusaContainer, MusaRow } from './Components/MusaLayout/' // notare import da index.jsx
import { MusaTitle } from './Components/MusaTitle'
import HPBook from './Components/HPBook'

import './App.css'

function App() {
  const [books, setBooks] = useState([])
  if (books.length === 0 ) {
    setBooks(getBooksMock())
  }

  return <MusaContainer>
    <MusaRow>
      <MusaTitle>Harry Potter</MusaTitle>
    </MusaRow>
    <MusaRow>
      {books && books.map( book => <HPBook key={book.index} book={book} /> )}
    </MusaRow>
  </MusaContainer>
}

export default App
