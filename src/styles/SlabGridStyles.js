const styles = theme => ({

    imgGrid: {
        margin: '50px 180px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '60px'
    },
    imgWrap: {
        overflow: "hidden",
        height: '220px',
        width: "auto",
        padding: '50% 0',
        position: 'relative',
        borderRadius: '12px',

        "& img": {
            minWidth: '100%',
            minHeight: '100%',
            maxHeight: '100%',
            maxWidth: '100%',
            height: 'auto',
            position: 'absolute',
            top: 0,
            left: 0,
            margin: 'auto'
        },
        "&:hover": {
            cursor: "pointer"
        },
    },
})


export default styles