import React, { useState } from 'react'
import { ListGroup, Badge } from 'react-bootstrap'
import moment from 'moment'

const Note = (props) => {
  function shouldShowPassword() {
    const currentDate = moment()
    return (
      currentDate.isBefore(props.note.startDate) ||
      currentDate.isAfter(props.note.endDate)
    )
  }

  function onDeleteHandler() {
    props.onDelete(props.note.id)
  }

  function copyPassHandler() {
    navigator.clipboard.writeText(props.note.note)
  }

  return (
    <ListGroup.Item>
      <h5>{props.note.title}</h5>
      <p>
        {!shouldShowPassword() &&
          'Opens At ' + moment(props.note.endDate).format('MMMM Do, h:mm a')}
        {shouldShowPassword() &&
          moment(props.note.endDate).format('MMMM Do, h:mm a')}
      </p>
      {shouldShowPassword() && props.note.note}
      {!shouldShowPassword() && '******************'}
      <div className="deleteBtnContainer">
        {shouldShowPassword() && (
          <Badge onClick={copyPassHandler} className="deleteBadge" bg="primary">
            Copy
          </Badge>
        )}

        <Badge
          onClick={onDeleteHandler}
          className="deleteBadge ml-1"
          bg="secondary"
        >
          Delete
        </Badge>
      </div>
    </ListGroup.Item>
  )
}

export default Note
