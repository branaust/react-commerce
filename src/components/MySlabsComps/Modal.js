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
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



function TransitionsModal(props) {
    const { classes } = props
    const { open, toggleOpen, selectedImg } = useContext(DisplayContext)


    return (
        <div className={classes.backdrop}>
            <div className={classes.card}>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={toggleOpen}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>

                        <Card className={classes.root}>
                            <CardHeader
                                className={classes.card}
                                avatar={
                                    <Avatar aria-label="recipe" className={`${classes.avatar} ${classes.card}`}>
                                        9.5
                                </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings" >
                                        <MoreVertIcon className={`${classes.card}`} />
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
                                {/* <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleDrawer}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton> */}
                            </CardActions>
                            {/* <Drawer
                                className={classes.drawer}
                                variant="persistent"
                                anchor="right"
                                open={drawer}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                            >
                                <div className={classes.drawerHeader}>
                                    <IconButton onClick={handleDrawer}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </div>
                                <Divider />
                                <List>
                                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                        <ListItem button key={text}>
                                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    ))}
                                </List>
                                <Divider />
                                <List>
                                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                        <ListItem button key={text}>
                                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Drawer> */}

                        </Card>
                    </Fade>
                </Modal>
            </div>
        </div >
    );
}

export default withStyles(styles)(TransitionsModal)