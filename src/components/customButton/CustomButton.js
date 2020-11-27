import { Button, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './CustomButton.css';

const propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    onClickFunc: PropTypes.func.isRequired,
    icon: PropTypes.object,
    disabled: PropTypes.bool
};

function CustomButton({ classes, text, onClickFunc, icon, disabled}) {
    return (
        <>
            <Button
                variant="contained"
                color="default"
                size="medium"
                classes={{
                    contained: classes.button
                }}
                onClick={onClickFunc}
                startIcon={icon ? icon : null}
                disabled={disabled ? disabled : null}
            >
                {text}
            </Button>
        </>
    );
}

CustomButton.propTypes = propTypes;
export default withStyles(styles)(CustomButton);
