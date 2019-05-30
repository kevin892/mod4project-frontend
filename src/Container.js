import React from 'react'
import Project from './Project'
import './Container.css'

const Container = (props) => {

const projects = props.projects.map((project, index) => {
  return <Project {...project} key={Date.now() + index} removeProject={props.removeProject} />
})

return(

  <div className="blob-container" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
    {projects}
  </div>
)
}


export default Container
