import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'


/*  have to include all componests to be routed */
import Navbar from './components/Navbar'
import Home from './components/Home'
import PostList from './components/PostList'
import Contact from './components/Contact'
import Post from './components/Posts'
import CardDetails from './components/CardDetails'
import LoginForm from './components/LoginForm';
import "./App.css";
import "./index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/PostList' component={PostList} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/PostList/:post_id' component={Post} />
            <Route exact path='/Home/:photo_id' component={CardDetails} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

  