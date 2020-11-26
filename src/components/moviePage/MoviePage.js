import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import axios from 'axios';
import parse from 'html-react-parser';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';
import styles from './MoviePage.css';

const propTypes = {
    classes: PropTypes.object.isRequired
}

const MoviePage = ({ classes }) => {
    let { id } = useParams();
    let history = useHistory();
    const [movie, setMovie] = useState();

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/movies/${id}`)
                setMovie(response.data[0]);
            } catch (error) {
                console.log(error);
            }
        }
        getMovie();
    }, []);

    const getSubInfo = (propName, value) => {
        return <Typography variant="subtitle1">
            <span className={classes.bold}>{propName}: </span>{value}
        </Typography>
    }

    const getMovieDuration = (time) => {
        let formatted = moment(time, "HH:mm").format('HH:mm');
        return moment.duration(formatted).asMinutes();
    }

    return (
        <>
            {movie && <Paper className={classes.paper}>
                <Grid container >
                    <Grid item xs={8} className={classes.left}>
                        <Typography variant="h4" className={classes.headline}>{parse(movie.title)}</Typography>
                        <Typography variant="h6">{parse(movie.synopsis)}</Typography>

                        <Grid className={classes.extraDetails}>
                            {movie.rating && getSubInfo('Rating', `${movie.rating}/10`)}
                            {movie.released && getSubInfo('Year Released', movie.released)}
                            {movie.runtime && getSubInfo('Duration', `${getMovieDuration(movie.runtime)} minutes`)}
                            <Grid className={classes.backButtonContainer}>
                                <CustomButton
                                    onClickFunc={history.goBack}
                                    icon={<KeyboardBackspaceIcon />}
                                    text='Back'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className={classes.right}>
                        <img src={movie.largeimage} alt={movie.title} />
                    </Grid>
                </Grid>
            </Paper>}
        </>
    );
}

MoviePage.propTypes = propTypes;
export default withStyles(styles)(MoviePage);
