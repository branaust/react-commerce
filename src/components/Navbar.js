import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import styles from '../styles/NavbarStyles'
import { withStyles } from '@material-ui/core/styles'
import { ThemeContext } from '../contexts/ThemeContext'
import { LanguageContext } from '../contexts/LanguageContext'


const languages = {
    english: {
        search: "Search",
        flag: "🇺🇸",
        title: "Context App"
    },
    spanish: {
        search: "Buscar",
        flag: "🇲🇽",
        title: "Aplicación de contexto"
    },
    german: {
        search: "Suche",
        flag: "🇩🇪",
        title: "Kontext-App"
    }
}

function Navbar(props) {
    const { classes } = props
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    const [open, setOpen] = React.useState(false);
    const blue = '#7acdcf'
    const purple = '#532f87'
    const yellow = '#eddc15'

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: purple }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        onClick={handleDrawerOpen}
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <h3>Slab Lab</h3>
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
                            placeholder='Search'
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default withStyles(styles)(Navbar)