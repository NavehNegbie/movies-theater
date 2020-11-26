import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography, withStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import { useState } from 'react';
import CustomButton from '../customButton/CustomButton';
import FilterItem from '../filterItem/FilterItem';
import filterInputs from './FilterInputesData';
import { filterMaxRate, filterMinRate, filterName, filterYear } from './FiltersFunctions';
import styles from './FiltersSection.css';

const propTypes = {
    classes: PropTypes.object.isRequired,
    setFilteredMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
}

const FiltersSection = ({ classes, setFilteredMovies, movies }) => {
    const [filters, setFilters] = useState({
        name: "",
        year: "",
        minRate: "",
        maxRate: "",
    })

    const handleChangeFilter = (value, propName) => {
        setFilters({ ...filters, [propName]: value });
    }

    const handleFilterMovies = (filters) => {
        setFilteredMovies(movies.filter(movie => filtersManagers(movie, filters)));
    }

    const filtersManagers = (movie, filters) => {

        let hasPassedFilter = true;
        for (let i = 0; i < filtesFunctions.length && hasPassedFilter; i++) {
            hasPassedFilter = filtesFunctions[i](movie, filters);
        }
        return hasPassedFilter;

        // filtesFunctions.map(aa => aa(movie, filters))
        // return (
        //     filterName(movie, filters) &&
        //     filterYear(movie, filters) &&
        //     filterRate(movie, filters) 
        //     )
    }

    const filtesFunctions = [
        filterName,
        filterYear,
        filterMinRate,
        filterMaxRate,
    ];

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
                        {filterInputs.map(filterInput => {
                            return <Grid key={filterInput.propName} item xs={3}>
                                <FilterItem
                                    handleChangeFilter={handleChangeFilter}
                                    label={filterInput.label}
                                    propName={filterInput.propName}
                                    type={filterInput.type}
                                />
                            </Grid>
                        })}
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
