import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../styles/FormStyles'
import useInputState from '../hooks/useInputState'
import Alert from '@material-ui/lab/Alert';


function ForgotPassword(props) {
    const { classes } = props
    const [email, updateEmail] = useInputState("")
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(email)
            setMessage('Check your inbox for further insructions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Password Reset</Typography>
                {message && <Alert severity="success">{message}</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
                <form className={classes.form} onSubmit={handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" name='email' value={email} onChange={updateEmail} autoFocus></Input>
                    </FormControl>
                    <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit} disabled={loading}>Reset Password</Button>
                </form>
            </Paper >
            <Typography className={classes.root}>
                <Link to='/login'>
                    Log In
                    </Link>
            </Typography>
        </main >
    )
}


export default withStyles(styles)(ForgotPassword)