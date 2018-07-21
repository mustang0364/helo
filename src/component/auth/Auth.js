import React, { Component } from 'react';
import {link} from 'react-redux';
import {connect} from 'react-redux';
import axios from 'axios'


class Auth extends Component {
  constructor(){
      super();

      this.state = {
          username: null,
          pass: '',
          message: null,
          showRegister: false,
          fetchedDataMessaage: null
      }
  };

  
  register = () => {
      this.setState({ message: null });
      const username = this.state.username;
        const password = this.state.pass;
      axios.post('/register', {
          username,
          password
        }).then(response => {
        console.log(response.data)
      }).catch(error => {
        this.setState({ message: 'Something went wrong: ' + (error) });
      });
    };

    login = () => {
        this.setState({ message: null });
        const username = this.state.username;
        const password = this.state.pass;
        axios.post('/login', {
            username,
            password
          }).then(response => {
              this.props.history.push('/dashboard')
        }).catch(error => {
            this.setState({ message: 'Something went wrong' + (error) });
        });
    };

    updateUser = (e) => {
      if(e.target.name === "username"){
          this.setState({
              username: e.target.value
          }) 
      } 
      if (e.target.name === "password"){
          this.setState({
              pass: e.target.value 
          })
      }
    }



    render() { 
    return (
      <div className="auth">
      <div>LOG SESSION</div>
      <input className="input username" placeholder="username" onChange={this.updateUser} name="username" />
      <input className="input password" placeholder="password" onChange={this.updateUser} name="password" />
      <a href='#' onClick={this.register}>Register</a>
         <button to='/dashboard' onClick={ this.login } >Login</button>

      
      </div>
    );
  }
}
 
export default Auth;