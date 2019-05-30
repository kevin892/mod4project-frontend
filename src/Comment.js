import React from 'react'
import Com from './Com'

const Comment = props => {
  const comments = props.comments.map((comment, index) => <Com {...comment} key={Date.now()+ index}/>)
  return(
    <div>
  {comments}
    </div>
  )
}

export default Comment
