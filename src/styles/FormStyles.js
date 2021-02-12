const blue = '#7acdcf'
const purple = '#532f87'
const yellow = '#eddc15'

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(3)
    },
    main: {
        width: "auto",
        display: "block",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
    },
    avatar: {
        margin: theme.spacing(),
        backgroundColor: yellow
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    submit: {
        marginTop: theme.spacing(3),
        backgroundColor: purple
    },
    link: {
        textDecoration: 'none',
        color: purple

    }
})

export default styles