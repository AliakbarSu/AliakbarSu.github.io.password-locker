import { useState, useEffect } from 'react'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
import Notes from './components/notes'
import AddNote from './components/addNote'
import { Container, Row, Col, Button } from 'react-bootstrap'

function App() {
  const [isAdding, setIsAdding] = useState(false)
  const [passwords, setPasswords] = useState([])

  useEffect(() => {
    setPasswords(readPasswordsFromLocalStorage())
  }, [])

  function onAddClickHandler() {
    setIsAdding(true)
  }

  function onPasswordAddHandler(password) {
    const allPasswords = readPasswordsFromLocalStorage()
    allPasswords.push(password)
    setPasswords(allPasswords)
    savePasswordsToLocalStorage(allPasswords)
    setIsAdding(false)
  }

  function readPasswordsFromLocalStorage() {
    const retrievedPasswords = localStorage.getItem('passwords')
    if (!retrievedPasswords) {
      return []
    }
    return JSON.parse(retrievedPasswords)
  }

  function savePasswordsToLocalStorage(passwordsToSave) {
    localStorage.removeItem('passwords')
    localStorage.setItem('passwords', JSON.stringify(passwordsToSave))
  }

  function onDeleteHandler(passToRemoveId) {
    let allPasswords = readPasswordsFromLocalStorage()
    allPasswords = allPasswords.filter((ps) => ps.id !== passToRemoveId)
    setPasswords(allPasswords)
    savePasswordsToLocalStorage(allPasswords)
  }

  function onCancelHandler() {
    setIsAdding(false)
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            {!isAdding &&
              (passwords.length ? (
                <Notes onDelete={onDeleteHandler} notes={passwords} />
              ) : (
                <p className="noPassText">No Password To Display</p>
              ))}
            {isAdding && (
              <AddNote
                onCancel={onCancelHandler}
                onSave={onPasswordAddHandler}
              />
            )}
          </Col>
        </Row>
        {!isAdding && (
          <Row>
            <Col className="buttonContainer">
              <Button variant="primary" onClick={onAddClickHandler}>
                Add Password
              </Button>{' '}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  )
}

export default App
