import React from 'react'
import Project from './Project'
import './Container.css'
const myState = false

const Container = (props) => {

const projects = props.projects.map((project, index) => {
  return <Project {...project} key={Date.now() + index} removeProject={props.removeProject} />
})

return(
  <div>
<br/>
  <h1 class="uk-heading-small"><span uk-icon="icon: grid"></span><u>My APIs</u></h1>
  <div className="blob-container" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
    {projects}
  </div>
  </div>
)
}


export default Container
