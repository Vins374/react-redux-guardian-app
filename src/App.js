import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';
import Login from './components/Login';
import Routes from './components/Routes';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Routes />
        {/* <Login/> */}
        {/* <hr /> */}
        {/* <PostForm/> */}
        {/* <hr/> */}
        {/* <Posts/> */}
      </div>
      </Provider>
    );
  }
}

export default App;
