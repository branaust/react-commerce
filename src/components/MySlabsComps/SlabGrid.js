import React, { useContext } from 'react'
import useFirestore from '../../hooks/useFirestore'
import { auth } from '../../firebase'
import { withStyles } from "@material-ui/core/styles";
import styles from '../../styles/SlabGridStyles'
import TransitionsModal from './Modal'
import { DisplayContext } from '../../contexts/DisplayContext'

const SlabGrid = (props) => {
    const { open, toggleOpen, setSelectedImg, selectedImg } = useContext(DisplayContext)
    const { docs } = useFirestore(`users/${auth.currentUser.uid}/my-slabs`)
    const { classes } = props

    console.log(selectedImg)

    return (
        <div className={classes.imgGrid}>
            {open && <TransitionsModal />}
            {docs && docs.map(doc => (
                <div className={classes.imgWrap} key={doc.id} onClick={() => setSelectedImg(doc)} >
                    <img src={doc.url} alt="img pic" onClick={toggleOpen} />
                </div>
            ))
            }
        </div >
    )
}

export default withStyles(styles)(SlabGrid)