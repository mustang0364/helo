import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../nav/Nav';
import { username, getPosts, userData } from '../../ducks/reducer';
import { connect} from 'react-redux'

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state ={
      posts: ''
    }
  }
  componentDidMount(){

    function userData(){
      return axios.get('/user-data')
    }

    function getPosts(){
      return axios.get('/api/posts')
    }

    axios.all([userData(), getPosts()]).then(axios.spread((userData, Posts)=> {
        console.log(userData.data)
        this.setState({
          posts: Posts.data
        })
        this.props.getPosts(Posts.data)
        this.props.userData(userData.data)
    })

    )

  }

 


  render() {
    console.log('Dashboard---', this.props)
    console.log('Dashboard---state', this.state.posts)

  let navbar = this.props.location.pathname != '/' ? <Nav /> : '';

  let showPost = this.props.posts.map( e => {
    return (
      <div className="posts" key={e.id}>
        <p>Title: {e.title}</p>
        <p>image: {e.img}</p>
        <p>content: {e.content}</p>
      </div>
    )
  })


    return (
      <div>
        <Nav/>
        <div className="dashboard">
          <div>Dashboard Component Test</div>
          <div>{showPost}</div>
        </div>
      </div>
    );
  }
}




const mapStateToProps = state => {
  return {
    posts: state.posts,
    username: state.username
  }
}

const mapDispatchToProps = {
  getPosts,
  userData
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);