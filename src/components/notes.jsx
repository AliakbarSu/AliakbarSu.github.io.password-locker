import React from 'react'

export default (props) => {
  return props.notes.map((note) => {
    return <div key={note.id}>{note.title}</div>
  })
}
