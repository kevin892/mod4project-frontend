import React from 'react'
import Container from './Container'
import ProjectForm from './ProjectForm'
import Swal from 'sweetalert2'
import Navbar from './Navbar'


class MainComponent extends React.Component {
  state = {
    projects: []
  }
  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:8000/api/projects/')
      const result = await response.json()
      this.setState({projects: result})
    } catch (error) {
      console.log(error.message);
    }
  }

  removeProject = (id) => {
    const filteredProjects = this.state.projects.filter(project => project.id !== id)
    this.setState({projects: filteredProjects, page: this.state.page})

    fetch(`http://localhost:8000/api/projects/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar/>
      <br/>
    <Container projects={this.state.projects} removeProject={this.removeProject}/>}
    </div>)
  }
}

export default MainComponent;
