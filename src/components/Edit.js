import React from 'react'

const edit = (props) => {
  console.log(props)
  return (
    <div>
      Editing expense with an id of {props.match.params.id}
    </div>
  )
}

export default edit