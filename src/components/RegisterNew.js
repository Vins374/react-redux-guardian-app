import React, { Component } from 'react';

import PropTypes from 'prop-types';
import{ connect } from 'react-redux';
import { registerUser } from '../actions/userActions';

class RegisterNew extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            fullname:'',
            email:'',
            mobile:'',
            password:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.gotoLogin = this.gotoLogin.bind(this);
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
            fullname: this.state.fullname,
            email: this.state.username,
            password: this.state.password
        }
        this.props.registerUser(user);
    }

    gotoLogin(e) {
        this.props.history.push('/');
    }

    render() {
        const { user, loader, error }  = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-primary navbar-transparent navbar-absolute" color-on-scroll="500">
                    <div className="container">
                        <div className="navbar-wrapper">
                        <a className="navbar-brand" href="#pablo">App Register</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar">
                        <ul className="navbar-nav">
                            
                            <li className= "nav-item active ">
                                <a className="nav-link">
                                <i className="material-icons">person_add</i>
                                Register
                                </a>
                            </li>
                            <li className= "nav-item " onClick={this.gotoLogin}>
                                <a className="nav-link">
                                <i className="material-icons">fingerprint</i>
                                Login
                                </a>
                            </li>
                        </ul>
                        </div> 
                    </div>
                </nav>
                <div className="wrapper wrapper-full-page">
                    <div className="page-header login-page header-filter login-page-bg" filter-color="black" >
                        <div className="container">
                        <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                            <form className="form" method="" action="#" onSubmit={this.onSubmit}>
                                <div className="card card-login">
                                    <div className="card-header card-header-rose text-center">
                                    <h4 className="card-title">Regsiter</h4>
                                    
                                    </div>
                                    <div className="card-body ">
                                    <span className="bmd-form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                <i className="material-icons">contacts</i>
                                                </span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Fullname..." name="fullname" onChange={this.onChange} value={this.state.fullname} required />
                                        </div>
                                    </span>

                                    <span className="bmd-form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                <i className="material-icons">email</i>
                                                </span>
                                            </div>
                                            <input type="email" className="form-control" placeholder="Email..." name="username" onChange={this.onChange} value={this.state.email} required />
                                        </div>
                                    </span>

                                    <span className="bmd-form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                <i className="material-icons">stay_current_portrait</i>
                                                </span>
                                            </div>
                                            <input type="number" className="form-control" placeholder="Mobile..." name="mobile" onChange={this.onChange} value={this.state.mobile} required />
                                        </div>
                                    </span>

                                    <span className="bmd-form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                <i className="material-icons">lock_outline</i>
                                                </span>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Password..." name="password" onChange={this.onChange} value={this.state.password} required />
                                        </div>
                                    </span>
                                    </div>
                                    <div className="card-footer justify-content-center">
                                        <button type="submit" className="btn btn-rose btn-link btn-lg">Lets Go</button>
                                        <div>
                                                { error &&  
                                            <div className="alert alert-danger">
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <i className="material-icons">close</i>
                                            </button>
                                            <span> {error} </span>
                                            </div> }
                                        </div>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                        
                        </div>
                        
                       


                    </div>

                     <footer className="footer login-footer">
                        <div className="container">
                            <nav className="pull-left">
                            </nav>
                            <div className="copyright pull-right">
                                &copy; 2018 made with React and Redux.
                            </div>
                        </div>
                        </footer>
                </div>
            </div>
        )
    }
}

RegisterNew.propTypes = {
    registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user: state.user.loginData,
    loader: state.user.loader,
    error: state.user.error
});

export default connect(mapStateToProps, { registerUser })(RegisterNew);