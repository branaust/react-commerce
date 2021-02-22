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
        width: "120%",
        height: "auto"
    },
    // },
    // backdropImg: {
    //     display: 'block',
    //     maxHeight: "80%",
    //     maxWidth: "60%",
    //     margin: "60px auto",
    //     boxShadow: "3px 5px 7px rgba(0,0,0,0.5)",
    //     border: "3px solid white",
    //     textDecoration: "none",
    //     outline: "none",
    //     zIndex: 1
    // },
    root: {
        padding: '0px 20px',
    },
    media: {
        paddingTop: '170%', // 16:9
        display: 'block',
        height: '100%',
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
});

export default styles