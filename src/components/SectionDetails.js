// This file is shared across the demos.

import React, { Component } from 'react';
import{ connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

import { getSections,getSectionDetails } from '../actions/sectionActions';

class SectionDetails extends Component { 
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("working from sidebar section");
        this.props.getSections();
    }

    render() {
        
        const { sectionDetailData } = this.props;
        var list = false;

        console.log(sectionDetailData);

        if(sectionDetailData.response){
            console.log(sectionDetailData.response);
            list = sectionDetailData.response.results;
        }
        
        return( 
            <div>

                {list && list.map(list => (
                    <div>
                        <Card>
                    <CardContent>
                        <Typography color="textSecondary">
                            {list.sectionName}
                        </Typography>
                        <Typography variant="headline" component="h2">
                        {list.webTitle}
                        </Typography>
                        <Typography color="textSecondary">
                            {list.webPublicationDate}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <a target="_blank" href={list.webUrl}><Button size="small">Learn More</Button></a>
                    </CardActions>
                    </Card>
                    </div>
                    ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sectionDetailData: state.section.sectionDetailData,
    loader: state.section.loader,
    error: state.section.error
});

export default connect(mapStateToProps, { getSections,getSectionDetails })(SectionDetails);
