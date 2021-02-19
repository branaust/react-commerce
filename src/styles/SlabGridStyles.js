const styles = theme => ({

    imgGrid: {
        margin: '20px auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '40px'
    },
    imgWrap: {
        overflow: "hidden",
        height: '0',
        padding: '50% 0',
        position: 'relative',
        opacity: '0.8',

        "& img": {
            minWidth: '100%',
            minHeight: '100%',
            maxWidth: '150%',
            position: 'absolute',
            top: 0,
            left: 0,
            
        }
    },


})


export default styles