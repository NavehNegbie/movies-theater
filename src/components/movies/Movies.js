import { Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { MOVIES } from '../../routes/routes';
import UserMessage from '../userMessage/UserMessage';
import MovieItem from './movieItem/MovieItem';
import styles from './Movies.css';

const propTypes = {
    classes: PropTypes.object.isRequired,
    filteredMovies: PropTypes.array
};

function Movies({ classes, filteredMovies }) {

    const getResults = () => {
        if (!filteredMovies)
            return

        if (filteredMovies.length) {
            return renderFilteredMovies();
        }
        else {
            return <UserMessage>Oops... It looks like there are no movies according to your filters.</UserMessage>
        }
    }

    const renderFilteredMovies = () => {
        return <Grid container spacing={2} className={classes.moviesContainer}>
            {filteredMovies.map(movie => {
                return (
                    <Grid key={movie.id} item xs={2}>
                        <Link to={MOVIES + movie.id} className={classes.link}>
                            <MovieItem
                                movie={movie}
                            />
                        </Link>
                    </Grid>
                )
            })}
        </Grid>
    }

    return (
        <>
            {getResults()}
        </>
    );
}

Movies.propTypes = propTypes;
export default withStyles(styles)(Movies);
