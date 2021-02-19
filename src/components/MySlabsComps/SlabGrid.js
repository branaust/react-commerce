import React from 'react'
import useFirestore from '../../hooks/useFirestore'
import { auth } from '../../firebase'
import { withStyles } from "@material-ui/core/styles";
import styles from '../../styles/SlabGridStyles'

const SlabGrid = (props) => {
    const { docs } = useFirestore(`users/${auth.currentUser.uid}/my-slabs`)
    const { classes } = props
    console.log(docs)
    return (
        <div className={classes.imgGrid}>
            {docs && docs.map(doc => (
                <div className={classes.imgWrap} key={doc.id}>
                    <img src={doc.url} alt="img pic" />
                </div>
            ))}
        </div>
    )
}

export default withStyles(styles)(SlabGrid)