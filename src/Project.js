import React from 'react'
import './Blob.css'
import './Project.css'


const Project = (props) => {
    return(
      <div className='blob'>
        <h1 uk-scrollspy="cls:uk-animation-fade" className="uk-heading-medium title">{props.title}</h1>
        <a className="hvr-grower uk-heading-bullet title" href={props.json_url}>JSON</a><br/>
        <a className="hvr-grower uk-heading-bullet title" href={props.app_url}>API Hub</a>
        <span className='hvr-grow trash-icon'onClick={()=>props.removeProject(props.id)} uk-icon="icon: close; ratio: 3"></span>
      </div>

    )
  }

export default Project
