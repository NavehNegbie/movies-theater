import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired
};

const useStyles = makeStyles((theme) => ({
    media: {
        height: 440,
    },
    cardContentRoot: {
        height: '12rem'
    },
}));

function MovieItem({ movie }) {
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    classes={{
                        media: classes.cardMedia
                    }}
                    className={classes.media}
                    image={movie.largeimage}
                    title={movie.title}
                />
                <CardContent classes={{
                    root: classes.cardContentRoot
                }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {parse(movie.title)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {parse(movie.synopsis)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MovieItem;