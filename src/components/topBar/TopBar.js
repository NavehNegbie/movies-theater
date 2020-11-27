import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../routes/routes';
import styles from './TopBar.css';

const propTypes = {
    classes: PropTypes.object.isRequired
};

function TopBar({ classes }) {
    return (
        <AppBar
            position="static"
            classes={{
                root: classes.appBar
            }}>
            <Toolbar>
                <Link to={HOME} className={classes.link}>
                    <Typography variant="h4">
                        Next Theater
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

TopBar.prototype = propTypes;
export default withStyles(styles)(TopBar);
