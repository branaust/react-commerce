import React, { useContext } from 'react'
import useFirestore from '../../hooks/useFirestore'
import { auth } from '../../firebase'
import { withStyles } from "@material-ui/core/styles";
import styles from '../../styles/SlabGridStyles'
import TransitionsModal from './Modal'
import { DisplayContext } from '../../contexts/DisplayContext'

const SlabGrid = (props) => {
    const { open, toggleOpen, setSelectedImg } = useContext(DisplayContext)
    const { docs } = useFirestore(`users/${auth.currentUser.uid}/my-slabs`)
    const { classes } = props

    const handleClick = (e) => {
        if (e.target.classList.contains('imgGrid')) {
            toggleOpen()
        }
    }

    return (
        <div className={classes.imgGrid} onClick={toggleOpen}>
            {open && <TransitionsModal />}
            {docs && docs.map(doc => (
                <div className={classes.imgWrap} key={doc.id} onClick={() => setSelectedImg(doc.url)} >
                    <img src={doc.url} alt="img pic" onClick={toggleOpen} />
                </div>
            ))
            }
        </div >
    )
}

export default withStyles(styles)(SlabGrid)