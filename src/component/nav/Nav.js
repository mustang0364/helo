import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.css';
import {connect} from 'react-redux';
import { username, profilePic } from '../../ducks/reducer';




function makeid() {
  var text = "";
  var possible = "linconl";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

const icon = () => {
  return makeid();
}

const Nav = (props) => {
  return (
      <div className="nav">
          {console.log('Nav--------', props)}
          <img className="user-icon" src={`https://robohash.org/${icon}.png`} />
          <div>{props.user.username}</div>
          <div>{props.user.id}</div>
          <button><Link to="/dashboard" className="link">Home</Link></button>
          <button><Link to="/new/" className="link"></Link>New Post</button>
          <button> <Link to="/" className ="link">Logout</Link></button>
        
      </div>
    )
  }
  const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps)(Nav);
