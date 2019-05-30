import React from 'react'
import './Blob.css'


const Project = (props) => {
    return(
      <div className='blob'>
        <h1 uk-scrollspy="cls:uk-animation-fade" className="uk-heading-medium title">{props.title}</h1>
        <p className="uk-heading-bullet title">{props.json_url}</p>
        <p className="uk-heading-bullet title">{props.app_url}</p>
        <span onClick={()=>props.removeProject(props.id)} uk-icon="trash"></span>
      </div>

    )
  }

export default Project
