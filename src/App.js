import React from 'react';
import './App.css';
import Container from './Container'
import ProjectForm from './ProjectForm'
import Swal from 'sweetalert2'

class App extends React.Component {
  state = {
    projects: []
  }

  firstTimer(link, url) {
    let timerInterval
    Swal.fire({
      title: 'Generating!',
      html: '<strong></strong>',
      timer: 4000,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong').textContent = Swal.getTimerLeft()
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire({
          title: 'Your link is ready!',
          text: `Please copy and paste the following text into the terminal 👉${link}`,
          type: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'All set!'
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              title: 'Your link is ready!',
              type: 'info',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Take me There!'
            }).then((result) => {
              if (result.value) {
                window.location = `${url}s`
              }
            })
          }
        })
      }
    })
  }

  addProject = (post) => {

    const link = `rails new ${post.project_name} && cd ${post.project_name} && rails g scaffold ${post.project_resource} ${post.project_attribute_1_name}:${post.project_attribute_1_type} ${post.project_attribute_2_name}:${post.project_attribute_2_type}  ${post.project_attribute_3_name}:${post.project_attribute_3_type} && rails db:create && rails db:migrate && rails s -p 3001`
    const url = `http://localhost:3001/${post.project_resource.toLowerCase()}`

    this.firstTimer(link, url)

    return fetch('http://localhost:8000/api/projects/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user: 1, app_url: url, json_url: `${url}.json`, title: post.project_name})
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
  //
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
    this.setState({projects: filteredProjects})

    fetch(`http://localhost:8000/api/projects/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
    return (<div>
      <ProjectForm addProject={this.addProject}/>
      <Container projects={this.state.projects} removeProject={this.removeProject}/>
    </div>)
  }
}

export default App;
