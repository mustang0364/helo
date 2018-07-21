import React, { Component } from 'react';
import Nav from '../nav/Nav';
import { connect } from 'react-redux';
import { getContent, getImg, getTitle } from '../../ducks/reducer'  ;

class Form extends Component {


 addPost(){
   console.log('form addPost-------', this.props)
   let post = this.props;
   let newPost = {
     
   }
 }


  render() {
    let navbar = this.props.location.pathname != '/' ? <Nav /> : ''
    return (
      <div>
      <Nav/>
      <div className="form">
        <div>New Post</div>
        <div>
          Title:<input onChange="" />
          Image URL:<input onChange="" />
          Content:<input onChange="" />
          <button onClick={ () => this.addPost() }>Submit</button>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = {
getTitle,
   getImg,
   getContent
}


export default connect(mapStateToProps)(Form);