import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './component/auth/Auth';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Post from './component/post /Post';


export default function routes() {
    return <Switch>
      <Route path="/" exact render={() => {
        return (
          <div>
            <h1>Welcome to Helo</h1>
          </div>
        )
      }} />
      <Route path="/" component={Auth} />
      <Route path='/dashboard' component={ Dashboard } />
      <Route path="/post/:postid " component={Post} />
      <Route path="/new" component={Form} />
    </Switch>
  }