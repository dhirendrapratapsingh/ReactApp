import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'


/*  have to include all componests to be routed */
import Navbar from './components/Navbar'
import OrderStatus from './components/OrderStatus'
import Cardss from './components/Cardss'
import PostList from './components/PostList'
import Contact from './components/Contact'
import Post from './components/Posts'
import CardDetails from './components/CardDetails'
import LoginForm from './components/LoginForm';
import ToDo from './components/ToDo';

import "./css/Navbar.css";
import "./css/ToDo.css";
import "./css/Cards.css";
import "./css/PostList.css";
import "./css/OrderStatus.css";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route exact path='/home' component={ToDo} />
            <Route exact path='/cards' component={Cardss} />
            <Route exact path='/PostList' component={PostList} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/PostList/:post_id' component={Post} />
            <Route exact path='/cards/:photo_id' component={CardDetails} />
           <Route exact path='/OrderStatus' component={OrderStatus} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

  