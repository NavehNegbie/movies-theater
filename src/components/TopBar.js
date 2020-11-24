import { AppBar, fade, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { useParams } from 'react-router-dom';

TopBar.propTypes = {
    // movie: PropTypes.object.isRequired
};

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#0a263f'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '25ch',
            '&:focus': {
                width: '37ch',
            },
        },
    },
}));

function TopBar({ movie }) {
    const classes = useStyles();
    let { id } = useParams();

    return (
        <AppBar 
            position="static" 
            classes={{
                colorPrimary: classes.appBar
            }}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    {/* <Link to={HOME} className={classes.link}> */}
                    Next Theater
                {/* </Link> */}
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search movie…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;