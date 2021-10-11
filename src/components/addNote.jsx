import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import 'react-datepicker/dist/react-datepicker.css'
import { v4 as uuidv4 } from 'uuid'
var generator = require('generate-password')

const AddNote = (props) => {
  const [note, addNote] = useState('')
  const [title, setTitle] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  function addNoteHandler(event) {
    event.preventDefault()
    addNote(event.target.value)
  }

  function onPasswordSaveHandler() {
    const dataToPass = {
      id: uuidv4(),
      title,
      note,
      startDate,
      endDate
    }
    props.onSave(dataToPass)
  }

  function generatePassHandler() {
    const autoGenPassword = generator.generate({
      length: 15,
      numbers: true
    })
    addNote(autoGenPassword)
  }

  return (
    <Container className="addNoteContainer">
      <Row>
        <Col>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
            type="text"
          />
        </Col>
      </Row>
      <Row className="p-1 d-flex justify-content-between mt-4">
        <Col>
          <Form.Label>Password</Form.Label>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="secondary" onClick={generatePassHandler}>
            Auto Generate
          </Button>{' '}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            value={note}
            onChange={addNoteHandler}
            as="textarea"
            rows={3}
            style={{ height: '100px' }}
          />
        </Col>
      </Row>
      <Row className="p-1 mt-2">
        <Col>
          <Form.Label>Lock password from</Form.Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <DatePicker
            showTimeSelect
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Col>
      </Row>
      <Row className="p-1 mt-3">
        <Col>
          <Form.Label>To</Form.Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <DatePicker
            showTimeSelect
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </Col>
      </Row>
      <Row>
        <Col className="buttonContainer">
          <Button
            className="defaultButton"
            variant="secondary"
            onClick={props.onCancel}
          >
            Cancel
          </Button>{' '}
        </Col>
      </Row>
      <Row>
        <Col className="buttonContainer">
          <Button
            className="defaultButton"
            variant="primary"
            onClick={onPasswordSaveHandler}
          >
            Save Password
          </Button>{' '}
        </Col>
      </Row>
    </Container>

    // <div>
    //   <textarea onChange={addNoteHandler} value={note}></textarea>
    //   <DatePicker
    //     showTimeSelect
    //     selected={startDate}
    //     onChange={(date) => setStartDate(date)}
    //   />
    // </div>
  )
}

export default AddNote
