import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, makeStyles, Slider, TextField, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';

FiltersSection.propTypes = {
};

const useStyles = makeStyles((theme) => ({
    filterContainer: {
        paddingLeft: '30px',
        marginTop: '10px',
    },
    sliderContainer: {
        width: '300px'
    },
    accordionContainer: {
        width: '50%',
        margin: 'auto',
        marginTop: '10px'
    }
}));

function FiltersSection({ handleFilterMovies }) {
    const classes = useStyles();
    const [filters, setFilters] = useState({
        name: "",
        year: "",
        rate: [0, 10]
    })

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 10,
            label: '10',
        }
    ];

    const handleChangeFilter = (value, propName) => {
        setFilters({ ...filters, [propName]: value });
    }

    return (
        <Grid className={classes.accordionContainer}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Filter movies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2} className={classes.filterContainer}>
                        <Grid item xs={12}>
                            <label>Movie Name: </label>
                            <TextField onChange={(evt) => handleChangeFilter(evt.target.value, "name")} id="name" />
                        </Grid>
                        <Grid item xs={12}>
                            <label>Year: </label>
                            <TextField onChange={(evt) => handleChangeFilter(evt.target.value, "year")} id="year" />
                        </Grid>

                        <Grid container item xs={8} className={classes.sliderContainer}>
                            <Grid item xs={2}>
                                <label>
                                    Rate
                            </label>
                            </Grid>
                            <Grid item xs={10}>
                                <Slider
                                    value={filters.rate}
                                    min={0}
                                    max={10}
                                    onChange={(evt, newVal) => handleChangeFilter(newVal, "rate")}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    marks={marks}
                                // getAriaValueText={valuetext}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={() => handleFilterMovies(filters)}>
                                Filter
                        </Button>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
}

export default FiltersSection;