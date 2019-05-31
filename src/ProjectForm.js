import React from 'react'
import "./ProjectForm.css"

class ProjectForm extends React.Component {
  state = {
    project_name: '',
    project_resource: '',
    project_attribute_1_name: '',
    project_attribute_1_type: '',
    project_attribute_2_name: '',
    project_attribute_2_type: '',
    project_attribute_3_name: '',
    project_attribute_3_type: ''
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addProject(this.state)
    this.setState({
      project_name: '',
      project_resource: '',
      project_attribute_1_name: '',
      project_attribute_1_type: '',
      project_attribute_2_name: '',
      project_attribute_2_type: '',
      project_attribute_3_name: '',
      project_attribute_3_type: ''
    })
  }

  render() {

    return (<form className='myform' onSubmit={this.handleSubmit}>
    <div className='form-container'>
    <div className='one'>
      <label className='uk-label'>Project Name</label>
      <input className="uk-input" name='project_name' value={this.state.project_name} onChange={this.handleChange}/>
      <br/>
      <label className='uk-label'>Project Resource</label>
      <input className="uk-input" name='project_resource' value={this.state.project_resource} onChange={this.handleChange}/>
      <br/>
      <br/>
      <label className='uk-label'>Project Attribute 1 Name</label>
      <input className="uk-input" name='project_attribute_1_name' value={this.state.project_attribute_1_name} onChange={this.handleChange}/>
      <br/>
      <label className='uk-label'>Project Attribute 1 Type</label>
        <input onChange={this.handleChange} value={this.state.project_attribute_1_type} name='project_attribute_1_type' className="uk-input"
        />
      <br/>
      </div>
      <div className='two'>
      <label className='uk-label'>Project Attribute 2 Name</label>
      <input className="uk-input" name='project_attribute_2_name' value={this.state.project_attribute_2_name} onChange={this.handleChange}/>
      <br/>
      <label className='uk-label'>Project Attribute 2 Type</label>
      <input onChange={this.handleChange} value={this.state.project_attribute_2_type} name='project_attribute_2_type' className="uk-input"
      />
      <br/>
      <label className='uk-label'>Project Attribute 3 Name</label>
      <input className="uk-input" name='project_attribute_3_name' value={this.state.project_attribute_3_name} onChange={this.handleChange}/>
      <br/>
      <label className='uk-label'>Project Attribute 3 Type</label>
        <input onChange={this.handleChange} value={this.state.project_attribute_3_type} name='project_attribute_3_type' className="uk-input"
        />
      <br/>
      </div>
      </div>
      <br/>
      <button className="uk-button uk-button-secondary">Create</button>
    </form>)

  }
}

export default ProjectForm
