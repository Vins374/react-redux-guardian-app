import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import TopAppBar from './TopAppBar';
import ClippedDrawer from './ClippedDrawer';

class Dashboard extends Component { 
    render() {
        return(
            <div>
                {/* <TopAppBar/> */}
                {/* Dashboard */}
                <ClippedDrawer/>
            </div>   
        )
    }
}

export default Dashboard;
