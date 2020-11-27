const styles = theme => ({
    paper: {
        width: '70%',
        margin: 'auto',
        backgroundColor: theme.palette.darkBlue,
        color: theme.palette.white,
        position: 'relative',
        marginTop: '2%'
    },
    left: {
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
        color: theme.palette.white
    },
    headline: {
        marginBottom: '13px'
    },
    backButtonContainer: {
                position: 'absolute',
        bottom: '10px',
    }
  });

  export default styles;
  