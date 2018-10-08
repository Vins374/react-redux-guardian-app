import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginNew from './LoginNew';
import Login from './Login';
import Register from './Register';
import RegisterNew from './RegisterNew';
import Dashboard from './Dashboard';


class Routes extends Component {
   render() {
      return (
        <div>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/login-new' component={LoginNew} />
                <Route exact path='/register' component={RegisterNew} />

                <Route exact path='/register' component={RegisterNew} />
            </Switch>
        </div>
      );
   }
}
export default Routes;