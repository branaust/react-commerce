const styles = theme => ({

    imgGrid: {
        margin: '50px 100px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '40px'
    },
    imgWrap: {
        overflow: "hidden",
        height: '150px',
        width: "",
        padding: '50% 0',
        position: 'relative',
        borderRadius: '12px',

        "& img": {
            minWidth: '100%',
            minHeight: '100%',
            maxWidth: '150%',
            position: 'absolute',
            top: 0,
            left: 0,
            height: 'auto'
        },
        "&:hover": {
            cursor: "pointer"
        },
    },
})


export default styles