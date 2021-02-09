import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import styles from './styles/NavbarStyles'
import { withStyles } from '@material-ui/core/styles'
import { ThemeContext } from './contexts/ThemeContext'

function Navbar(props) {
    const { classes } = props
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    return (
        <div className={classes.root}>
            <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Material-UI
          </Typography>
                    <Switch
                        onChange={toggleTheme}
                        name="checkedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(Navbar)