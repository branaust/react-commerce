import React, { useContext, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { DisplayContext } from '../../contexts/DisplayContext'
import styles from '../../styles/ModalStyles'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function TransitionsModal(props) {
    const { classes } = props
    const { open, toggleOpen, selectedImg } = useContext(DisplayContext)
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleClick = (e) => {
        if (!e.target.classList.contains((classes.paper))) {
            toggleOpen()
        }
    }

    return (
        <div className={classes.backdrop}
            onClick={handleClick}
        >
            <div className={classes.card}>
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
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        9.5
                                </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="2001 Topps Traded Gold"
                                subheader="Albert Pujols"
                            />
                            <div className={classes.paper}>
                                <CardMedia
                                    className={classes.media}
                                    image={selectedImg.url}
                                    title=""
                                >
                                </CardMedia>
                            </div>

                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>

                                </CardContent>
                            </Collapse>

                        </Card>
                        {/* <div className={classes.paper}>
                        <img className={classes.backdropImg} src={selectedImg.url} alt="Modal Img" />

                    </div> */}
                    </Fade>
                </Modal>
            </div>
        </div>
    );
}

export default withStyles(styles)(TransitionsModal)