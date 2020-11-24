import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import parse from 'html-react-parser';
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '70%',
        margin: 'auto',
        backgroundColor: '#0a263f',
        color: 'white',
        position: 'relative',
        marginTop: '2%'
    },
    left: {
        // width: '50%',
        // left: '20%',
        // height: '100%'
        paddingTop: '10px',
        paddingLeft: '20px'
    },
    right: {
        textAlign: 'end'
    },
    bold: {
        fontWeight: 'bolder'
    },
    extraDetails: {
        marginTop: "15px"
    },
    whiteFont: {
        color: 'white'
    },
    button: {
        backgroundColor: '#27d6ff',
        position: 'absolute',
        bottom: '10px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#12a5c7',
        },
    },
    headline: {
        marginBottom: '13px'
    }
}));

const MoviePage = (props) => {
    const classes = useStyles();
    let { id } = useParams();
    let history = useHistory();

    const movie = useSelector(state => state.movies).find(movie => movie.id === id);


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
                            {movie.rating &&
                                <Typography variant="subtitle1"><span className={classes.bold}>Rating:</span> {movie.rating}/10</Typography>}
                            {movie.released &&
                                <Typography variant="subtitle1"><span className={classes.bold}>Year Released:</span> {movie.released}</Typography>}
                            {movie.runtime &&
                                <Typography variant="subtitle1"><span className={classes.bold}>Duration:</span> {getMovieDuration(movie.runtime)} minutes</Typography>}
                            {/* <Link to={HOME}> */}
                                <Button
                                    variant="contained"
                                    color="default"
                                    size="small"
                                    classes={{
                                        contained: classes.button
                                    }}
                                    onClick={() => history.goBack()}
                                    startIcon={<KeyboardBackspaceIcon />}
                                >
                                Back
                            </Button>
                            {/* </Link> */}
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

MoviePage.propTypes = {
    // movie: PropTypes.object.isRequired
};
export default MoviePage;