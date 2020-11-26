import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesApi } from '../../API';
import { INIT_DATA } from '../../redux/actionTypes';
import FiltersSection from '../filtersSection/FiltersSection';
import Movies from '../movies/Movies';
import UserMessage from '../userMessage/UserMessage';

const Home = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);
    const [filteredMovies, setFilteredMovies] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getMovies = async () => {
            try {
                initMoviesData();
            } catch (error) {
                setIsError(true);
            }
        }
        getMovies();
    }, [dispatch]);

    const initMoviesData = async () => {
        const response = await getMoviesApi;
        dispatch({ type: INIT_DATA, data: response.data });
        setFilteredMovies(response.data.sort((a, b) => (a.title > b.title) ? 1 : -1));
    }

    const renderResults = () => {

        if (isError)
            return <UserMessage>Oops... It looks like we have a problem loading the movies</UserMessage>

        if (!movies)
            return <UserMessage>Just a bit until all the movies are getting loaded...</UserMessage>

        if (!movies.length)
            return <UserMessage>It looks like there are no movies...</UserMessage>

        return <>
            <FiltersSection setFilteredMovies={setFilteredMovies} movies={movies} />
            <Movies filteredMovies={filteredMovies} />
        </>
    }

    return (
        <>
            {renderResults()}
        </>
    );
}

export default Home;