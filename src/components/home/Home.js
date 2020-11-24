import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { INIT_DATA } from '../../redux/actionTypes';
import { MOVIES } from '../../routes/routes';
import FiltersSection from '../FiltersSection';
import MovieItem from '../MovieItem';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    media: {
        height: 440,
    },
    moviesContainer: {
        width: '100%',
        margin: 0
    },
    filterContainer: {
        height: '120px',
        paddingLeft: '30px'
    },
    link: {
        textDecoration: "none"
    },

    // title: {
    //     flexGrow: 2
    // },
}));

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const response = await axios.get('http://localhost:3000/movies')
            dispatch({ type: INIT_DATA, data: response.data });
            setFilteredMovies(response.data.sort((a, b) => (a.title > b.title) ? 1 : -1));
        }
        getMovies();
    }, [dispatch]);


    const handleFilterMovies = (filters) => {

        let moviesCopy = movies;

        moviesCopy = filters.name ? moviesCopy.filter(movie => movie.title.includes(filters.name)) : moviesCopy;

        moviesCopy = filters.year ? moviesCopy.filter(movie => movie.released === filters.year) : moviesCopy;

        moviesCopy = filters.rate[0] !== 0 || filters.rate[1] !== 10 ? moviesCopy.filter(movie => {
            return (movie.rating >= filters.rate[0] && movie.rating <= filters.rate[1])
        }) : moviesCopy;

        setFilteredMovies(moviesCopy);
        // setFilteredMovies(movies.filter(movie => movie.title.includes(filters.name))
        // .filter(movie => movie.released === filters.year)
        // .filter(movie => {
        //     return (movie.rating >= filters.rate[0] && movie.rating <= filters.rate[1])}));
    }

    return (
        <div className={classes.root}>

            <FiltersSection handleFilterMovies={handleFilterMovies} />

            <Grid container spacing={2} className={classes.moviesContainer}>
                {filteredMovies.map(movie => {
                    return (
                        <Grid key={movie.id} item xs={3}>
                            <Link to={{ pathname: MOVIES + movie.id, props: { movie } }} className={classes.link}>
                                <MovieItem
                                    movie={movie}
                                />
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default Home;