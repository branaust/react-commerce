const styles = (theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    backdrop: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        textDecoration: "none",
        outline: "none",

    },
    paper: {
        textDecoration: "none",
        outline: "none",
        height: "auto",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    root: {
        padding: '0px 50px',
        position: 'relative',
        zIndex: '100000'
    },
    media: {
        paddingTop: '170%', // 16:9
        height: '100%',
        width: 'auto',
        margin: "5px auto",
        marginLeft: "10px",
        marginRight: "10px",

    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#982332',
    },
    card: {
        zIndex: '1000'
    },
    drawer: {
        display: 'grid',
        gridColumn: '2/3',
    },
    drawerPaper: {
        position: 'absolute'
    }
});

export default styles