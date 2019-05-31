import React from 'react';
import './App.css';
import Container from './Container'
import ProjectForm from './ProjectForm'
import Swal from 'sweetalert2'
import Navbar from './Navbar'
import MainComponent from './MainComponent'

class App extends React.Component {
  state = {
    page: false
  }

  apiLister = (input)=>{
    if (input=="createApis"){
    this.setState({page: true})
  } else{
  this.setState({page: false})
  }
}

change = (input)=>{
  if (input=="change"){
  this.setState({page: false})
  }
}
  render() {
    return (<div>
      <br/>
      <Navbar apiLister={this.apiLister}/>
      <br/>
      <MainComponent change={this.change}page={this.state.page}/>
    </div>)
  }
}

export default App;
