import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import { NavLink } from 'react-router-dom';

import { history } from '../helpers';

import PropTypes from 'prop-types';
import{ connect } from 'react-redux';
import { loginUser } from '../actions/userActions';

class Login extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.gotoRegister = this.gotoRegister.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.user);
        if(nextProps.user)
            this.setState({ message : nextProps.user.message });
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const user = { 
            email: this.state.username,
            password: this.state.password
        }
        this.props.loginUser(user);
    }

    gotoRegister(e) {
        this.props.history.push('/register');
    }

    render() {
        const { user, loader, error }  = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
               <Card className="login-card">
                    <CardContent>
                    <TextField
                        label="Username"
                        required
                        name="username"
                        onChange={this.onChange} 
                        value={this.state.username}
                    />
                    <br/>
                    <TextField
                        label="Password"
                        required
                        type="password"
                        name="password"
                        onChange={this.onChange} 
                        value={this.state.password}
                    />
                    </CardContent>
                    <CardActions className="text-a-c" >
                    <Button type="submit" variant="raised" color="primary">
                        Submit
                    </Button>

                    {/* <NavLink to='/register'> */}
                    <Button variant="raised" color="default" onClick={this.gotoRegister}>
                        Register
                    </Button>
                    {/* </NavLink> */}
                    { loader && <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> }
                    { error && <p > {error} </p> }
                    </CardActions>
                </Card>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user: state.user.loginData,
    loader: state.user.loader,
    error: state.user.error
});

export default connect(mapStateToProps, { loginUser })(Login);