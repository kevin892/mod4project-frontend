import React from 'react';
import './App.css';

import MainComponent from './MainComponent'

class App extends React.Component {
state = {
  page:"one"
}

checkpage = (id) => {
  if (id == "two"){
    this.setState({page:"two"})
  }else {
    this.setState({page:"one"})
  }
}

  render() {
    return (
      <div>
        <button onClick={()=>this.checkpage("two")}>add</button>
        <button onClick={()=>this.checkpage("one")}>all</button>
      <br/>
      {this.state.page=="one" ? <MainComponent/>:<MainComponent kevin={"hello"}/>}
    </div>)
  }
}

export default App;
