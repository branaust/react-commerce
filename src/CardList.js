import React, { useState } from 'react';
import NewCard from './Card'
import { withStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({

    cardList: {
        display: 'grid',
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    contentShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
})

function CardList() {
    const [open, setOpen] = React.useState(true);
    return (
        <div className={{ [styles.contentShift]: open }

        } style={{ display: 'flex' }}>
            <NewCard />
            <NewCard />
            <NewCard />
            <NewCard />
            <NewCard />
        </div >
    )

}

export default withStyles(styles)(CardList)