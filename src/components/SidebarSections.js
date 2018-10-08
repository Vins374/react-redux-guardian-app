// This file is shared across the demos.

import React, { Component } from 'react';
import{ connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';


import { getSections,getSectionDetails } from '../actions/sectionActions';

class SidebarSections extends Component { 
    constructor(props) {
        super(props);

        // this.getSectionDetail = this.getSectionDetail.bind(this);
    }

    componentWillMount() {
        console.log("working from sidebar section");
        this.props.getSections();
    }

    getSectionDetail(url)
    {
        console.log(url);
        this.props.getSectionDetails(url);
        
    }

    render() {
        const { section, loader, error }  = this.props;
        var list = false;
        var listItems = [];

        if(section.response){
            console.log(section.response);
            list = section.response.results;

            const listItems = list.map(function(item, index){
                <div>{item.webTitle}</div>
            });
        }

        // console.log(list);

       

        
        return( 
            <div>
                {list && list.map(list => (
                    <div>
                        <ListItem button onClick={() => this.getSectionDetail(list.apiUrl)}>
                        <ListItemIcon>
                            <InboxIcon /> 
                        </ListItemIcon>
                        <ListItemText primary={list.webTitle} />
                        </ListItem>
                    </div>
                    ))}

                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    section: state.section.sectionData,
    loader: state.section.loader,
    error: state.section.error
});

export default connect(mapStateToProps, { getSections,getSectionDetails })(SidebarSections);
