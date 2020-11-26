import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './UserMessage.css';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

function UserMessage({ classes, children }) {
    return (
        <div>
            <Typography align="center" variant="h5" className={classes.text}>{children}</Typography>
        </div>
    );
}

UserMessage.propTypes = propTypes;
export default withStyles(styles)(UserMessage);