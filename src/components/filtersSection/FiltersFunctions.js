export const filterName = (movie, filters) => {
    return filters.name ? movie.title.toLowerCase().includes(filters.name.toLowerCase()): true;
}

export const filterYear = (movie, filters) => {
    return filters.year ? movie.released === filters.year: true;
}

export const filterMinRate = (movie, filters) => {
    if(!filters.minRate) return true;

    if(!movie.rating) return false;

    return (parseInt(movie.rating) >= parseInt(filters.minRate))
}

export const filterMaxRate = (movie, filters) => {
    if(!filters.maxRate) return true;

    if(!movie.rating) return false;

    return (parseInt(movie.rating) <= parseInt(filters.maxRate))
}