import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios'; //Import Axios
import './App.css';

class App extends Component{
  state = {
    text : ""
  }
  handleAdd = async e =>{
    await this.setState({
      text : e.target.value
    })
  }
  handleSubmit = e =>{
    e.preventDefault();
    console.log(this.state.text);
    let formData = new FormData();
    formData.append("text", this.state.text);
    const url = "http://localhost:80/react-backend/"
    axios.post(url,formData)
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err))
  }
  render(){
    return(
      <div className="App-header">
        <input 
          onChange={this.handleAdd}
          className="form-control" 
          // value={this.state.text}
          type="text" 
          id='text' 
          placeholder='Enter Some Text!'/> 
        <br/>
        <button 
          onClick={this.handleSubmit}
          className="btn btn-success" 
          id='submit'>  Save</button>
      </div>
    );
  }
}

export default App;
