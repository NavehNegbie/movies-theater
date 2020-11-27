import React, { useEffect, useState } from 'react';
import { getMoviesApi } from '../../API';
import { pagination } from '../../services/PaginationService';
import FiltersSection from '../filtersSection/FiltersSection';
import Movies from '../movies/Movies';
import Pagination from '../pagination/Pagination';
import UserMessage from '../userMessage/UserMessage';

const HomePage = () => {
    const [movies, setMovies] = useState()
    const [filteredMovies, setFilteredMovies] = useState();
    const [isError, setIsError] = useState(false);
    const [displayed, setDisplayed] = useState();
    const moviesInPage = 24;

    useEffect(() => {
        const getMovies = async () => {
            initMoviesData();
        }
        getMovies();
    }, []);

    const initMoviesData = async () => {
        try {
            const response = await getMoviesApi;
            const sorted = response.data.sort((a, b) => (a.title > b.title) ? 1 : -1);
            setMovies(sorted)
            setDisplayed([...sorted].splice(0, moviesInPage));
        } catch (error) {
            setIsError(true);
        }
    }

    const handleFilterMovies = (newMovies, isFiltering) => {

        isFiltering ? setFilteredMovies(newMovies) : setFilteredMovies(null);
        setDisplayed(pagination(1, moviesInPage, newMovies));
    }

    const renderResults = () => {

        if (isError)
            return <UserMessage>Oops... It looks like we have a problem loading the movies</UserMessage>

        if (!movies)
            return <UserMessage>Just a bit until all the movies are getting loaded...</UserMessage>

        if (!movies.length)
            return <UserMessage>It looks like there are no movies...</UserMessage>

        return <>
            <FiltersSection onFilterMovies={handleFilterMovies} movies={movies} />
            <Pagination items={filteredMovies ? filteredMovies : movies} setDisplayed={setDisplayed} itemsInPage={moviesInPage} />
            <Movies filteredMovies={displayed} />
        </>
    }

    return (
        <>
            {renderResults()}
        </>
    );
}

export default HomePage;
