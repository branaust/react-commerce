import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Alert from '@material-ui/lab/Alert';
import styles from '../styles/FormStyles'

function Dashboard(props) {
    const { classes } = props
    const [error, setError] = useState("")
    const { currentUser, authLogout } = useAuth()
    const history = useHistory()

    const handleLogout = async () => {
        setError('')
        try {
            await authLogout()
            history.push('/login')
        } catch{
            setError('Failed to log out')
        }
    }

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <h1>Profile</h1>
                {error && <Alert severity="error">{error}</Alert>}
                <h3>Email: {currentUser.email}</h3>
                <Link to="/update-profile" className={classes.link}>
                    Update Profile
                </Link>
            </Paper >
            <Typography className={classes.root}>
                <Button
                    onClick={handleLogout}
                    variant="contained"
                    fullWidth color="primary"
                    className={classes.submit}>
                    Logout
                </Button>
            </Typography>
        </main >
    )
}

export default withStyles(styles)(Dashboard)