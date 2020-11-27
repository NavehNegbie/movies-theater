import { TextField, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './FilterItem.css';

const propTypes = {
    classes: PropTypes.object.isRequired,
    handleChangeFilter: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    propName: PropTypes.string.isRequired,
    type: PropTypes.string
}

const FilterItem = ({ classes, handleChangeFilter, label, propName, type }) => {
    return (
        <>
            <TextField
                InputProps={{
                    classes: {
                        notchedOutline: classes.border,
                        input: classes.whiteText
                    }
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.whiteText
                    }
                }}
                type={type ? type : 'string'}
                label={label}
                variant="outlined"
                onChange={(evt) => handleChangeFilter(evt.target.value, propName)}
            />
        </>
    );
}

FilterItem.propTypes = propTypes;
export default withStyles(styles)(FilterItem);
