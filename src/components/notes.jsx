import React from 'react'
import { ListGroup } from 'react-bootstrap'
import moment from 'moment'
import Note from './Note'

const Notes = (props) => {
  return (
    <ListGroup>
      {props.notes.map((note) => (
        <Note onDelete={props.onDelete} key={note.id} note={note} />
      ))}
    </ListGroup>
  )
}

export default Notes
