import React from 'react'
import Container from './Container'
import ProjectForm from './ProjectForm'
import Swal from 'sweetalert2'
import Navbar from './Navbar'


class MainComponent extends React.Component {
  state = {
    projects: [],
    page: 'false'
  }

  firstTimer(link, url) {
    let timerInterval
    Swal.fire({
      title: 'Generating!',
      html: '<strong></strong>',
      timer: 3000,
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
          title: 'Please copy and paste the following text into the terminal👇',
          text: `${link}`,
          type: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'All set!'
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              title: 'Your API is ready!',
              type: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Take me There!'
            }).then((result) => {
              if (result.value) {
                window.location = `${url}`
              }
            })
          }
        })
      }
    })
  }

  addProject = (post) => {
    const link = `cd && cd Desktop/ && mkdir ${post.project_name}_project && cd ${post.project_name}_project/ && rails new ${post.project_name} && cd ${post.project_name} && rails g scaffold ${post.project_resource}
     ${post.project_attribute_1_name}:${post.project_attribute_1_type} ${post.project_attribute_2_name}:${post.project_attribute_2_type}  ${post.project_attribute_3_name}:${post.project_attribute_3_type} && rails db:create && rails db:migrate && rails s -p 3001`
    const url = `http://localhost:3001/${post.project_resource.toLowerCase()}s`

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
      this.setState({projects: result, page: this.state.page})
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

  apiLister(state){
    if (state=="createApis"){
    this.setState({page: "true"})
    }
  }

  render() {
    return (
      <div>
    <Navbar apiLister={this.apiLister}/>
      <br/>
      {this.props.kevin?<ProjectForm addProject={this.addProject}/>:
    <Container projects={this.state.projects} removeProject={this.removeProject}/>}
    </div>)
  }
}

export default MainComponent;