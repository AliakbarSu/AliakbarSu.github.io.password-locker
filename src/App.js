import { useState } from 'react'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Notes from './components/notes'
import AddNote from './components/addNote'

function App() {
  const [isAdding, setIsAdding] = useState(false)

  function onAddClickHandler() {
    setIsAdding(true)
  }
  return (
    <div className="App">
      {!isAdding && <Notes notes={[{ id: 'test', title: 'Testing' }]} />}
      {isAdding && <AddNote />}
      <button onClick={onAddClickHandler}>Add Note</button>
    </div>
  )
}

export default App
