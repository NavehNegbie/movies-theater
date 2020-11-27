import { Card, CardActionArea, CardContent, CardMedia, Typography, withStyles } from '@material-ui/core';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './MovieItem.css';

const propTypes = {
    classes: PropTypes.object.isRequired,
    movie: PropTypes.object.isRequired
};

function MovieItem({ classes, movie }) {

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    classes={{
                        media: classes.cardMedia
                    }}
                    className={classes.media}
                    image={movie.image}
                    title={movie.title}
                />
                <CardContent classes={{
                    root: classes.cardContentRoot
                }}>
                    <Typography gutterBottom variant="body1" component="h2" className={classes.title}>
                        {parse(movie.title)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.info}>
                        {parse(movie.synopsis)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

MovieItem.prototype = propTypes;
export default withStyles(styles)(MovieItem);