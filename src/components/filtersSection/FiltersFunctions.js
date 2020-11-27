export const filterIncludes = (movie, value) => {
    return movie.title.toLowerCase().includes(value.toLowerCase());
}

export const filterEqual = (movie, value) => {
    return movie.released === value;
}

export const filterMin = (movie, value) => {
    if(!movie.rating) return false;

    return (parseInt(movie.rating) >= parseInt(value))
}

export const filterMax = (movie, value) => {
    if(!movie.rating) return false;

    return (parseInt(movie.rating) <= parseInt(value))
}
