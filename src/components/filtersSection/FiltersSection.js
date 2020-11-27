import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography, withStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { useState } from 'react';
import CustomButton from '../customButton/CustomButton';
import filterInputs from './FilterInputsData';
import FilterItem from './filterItem/FilterItem';
import { filterEqual, filterIncludes, filterMax, filterMin } from './FiltersFunctions';
import styles from './FiltersSection.css';

const propTypes = {
    classes: PropTypes.object.isRequired,
    onFilterMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
}

const FiltersSection = ({ classes, onFilterMovies, movies }) => {

    const [filters, setFilters] = useState({
        name: {
            val: "",
            func: filterIncludes
        },
        year: {
            val: "",
            func: filterEqual
        },
        minRate: {
            val: "",
            func: filterMin
        },
        maxRate: {
            val: "",
            func: filterMax
        }
    })

    const handleChangeFilter = (value, propName) => {
        const updatedPropObject = { ...filters[propName], val: value }
        setFilters({ ...filters, [propName]: updatedPropObject });
    }

    const checkIfNoFilters = () => {
        return Object.keys(filters).find(filter => filters[filter].val)
    }

    const handleFilterMovies = () => {
        onFilterMovies(movies.filter(movie => filtersManagers(movie)), checkIfNoFilters());
    }

    const filtersManagers = (movie) => {

        let hasPassedFilter = true;
        const filtersKeys = Object.keys(filters);
        for (let i = 0; i < filtersKeys.length && hasPassedFilter; i++) {
            const currFilter = filtersKeys[i];
            const inputValue = filters[currFilter].val;
            hasPassedFilter = inputValue ? filters[currFilter].func(movie, inputValue) : true;
        }
        return hasPassedFilter;
    }

    const renderFilters = () => {
        return filterInputs.map(filterInput => {
            return <Grid key={filterInput.propName} item xs={3}>
                <FilterItem
                    handleChangeFilter={handleChangeFilter}
                    label={filterInput.label}
                    propName={filterInput.propName}
                    type={filterInput.type}
                />
            </Grid>
        })
    }

    return (
        <Grid className={classes.accordionContainer}>
            <Accordion
                classes={{
                    root: classes.accordionRoot
                }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                    <Typography variant="h6" className={classes.heading}>Filter movies</Typography>
                </AccordionSummary>
                <AccordionDetails
                    classes={{
                        root: classes.accordionDetailsRoot
                    }}
                >
                    <Grid container spacing={4}>
                        {renderFilters()}
                    </Grid>
                    <Grid className={classes.buttonContainer}>
                        <CustomButton
                            onClickFunc={() => handleFilterMovies(filters)}
                            text='Filter'
                        />
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
}

FiltersSection.prototype = propTypes;
export default withStyles(styles)(FiltersSection);
