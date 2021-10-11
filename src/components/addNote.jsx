import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export default (props) => {
  const [note, addNote] = useState('')
  const [startDate, setStartDate] = useState(new Date())

  function addNoteHandler(event) {
    event.preventDefault()
    addNote(event.target.value)
  }

  return (
    <div>
      <textarea onChange={addNoteHandler} value={note}></textarea>
      <DatePicker
        showTimeSelect
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  )
}
