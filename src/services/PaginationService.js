export const pagination = (pageNumber, moviesInPage, movies) => {
    const currentPosition = (pageNumber * moviesInPage) - moviesInPage;
    const moviesCopy = [...movies];
    return moviesCopy.splice(currentPosition, moviesInPage);
}