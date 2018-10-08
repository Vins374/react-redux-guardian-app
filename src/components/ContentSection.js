import React from 'react';
import{ connect } from 'react-redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SectionDetails from './SectionDetails';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function ContentSection(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (

    
    <div>

        <SectionDetails/>
    
    </div>
  );
}

ContentSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    sectionDetailData: state.section.sectionDetailData,
    loader: state.user.loader,
    error: state.user.error
});

export default compose(withStyles(styles),connect(mapStateToProps, null))(ContentSection);