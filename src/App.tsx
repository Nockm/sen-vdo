import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Post from './components/Post';
import logo from './logo.svg';

class App extends Component {
  public render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <header className='App-header'>
            <Link to='/'>
              <img src={logo} className='App-logo' alt='logo' />
            </Link>
            <h1 className='App-title'>Auto build! With typescript.</h1>
            <Link to='/'>Home</Link>
            <Link to='/post/'>Post</Link>
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/post/' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
