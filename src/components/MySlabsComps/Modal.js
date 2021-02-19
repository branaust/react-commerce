import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { DisplayContext } from '../../contexts/DisplayContext'

const useStyles = makeStyles((theme) => ({
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
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textDecoration: "none",
        outline: "none",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",


    },
    backdropImg: {
        display: 'block',
        maxHeight: "80%",
        maxWidth: "60%",
        margin: "60px auto",
        boxShadow: "3px 5px 7px rgba(0,0,0,0.5)",
        border: "3px solid white",
        textDecoration: "none",
        outline: "none",
    }
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const { open, toggleOpen, selectedImg, setSelectedImg } = useContext(DisplayContext)

    const handleClick = (e) => {
        if (!e.target.classList.contains((classes.backdropImg))) {
            toggleOpen()
        }
    }

    return (
        <div className={classes.backdrop} onClick={handleClick}>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                // onClick={toggleOpen}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <img className={classes.backdropImg} src={selectedImg} alt="Modal Img" />
                    </div>

                </Fade>
            </Modal>
        </div>
    );
}