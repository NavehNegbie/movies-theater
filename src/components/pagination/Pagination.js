import { Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { pagination } from '../../services/PaginationService';
import CustomButton from '../customButton/CustomButton';
import styles from './Pagination.css';

const propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    setDisplayed: PropTypes.func.isRequired,
    itemsInPage: PropTypes.number.isRequired
};

const Pagination = ({ classes, items, setDisplayed, itemsInPage }) => {

    const calculateMaxPageNumber = (items) => {
        return Math.ceil(items.length / itemsInPage);
    }

    const [pageNumber, setPageNumber] = useState(1);
    const [maxPages, setMaxPages] = useState();

    useEffect(() => {
        setMaxPages(calculateMaxPageNumber(items));
        setPageNumber(1);
    }, [items])
    
    const handleNextOrPrev = (isNext) => {
        const currentPageNumber = isNext ? pageNumber + 1 : pageNumber - 1;
        setDisplayed(pagination(currentPageNumber, itemsInPage, items));
        setPageNumber(currentPageNumber);
    }

    const isButtonDisabled = (page) => {
        return page === pageNumber || !items.length
    }

    return (
        <Grid className={classes.buttonsContainer}>
            <CustomButton 
                onClickFunc={() => handleNextOrPrev(false)} 
                disabled={isButtonDisabled(1)} 
                text={'prev'} 
            />
            <CustomButton 
                onClickFunc={() => handleNextOrPrev(true)} 
                disabled={isButtonDisabled(maxPages)} 
                text={'next'} 
            />
        </Grid>
    );
}

Pagination.propTypes = propTypes;
export default withStyles(styles)(Pagination);