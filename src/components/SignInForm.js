import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../styles/FormStyles'
import useInputState from '../hooks/useInputState'

import Alert from '@material-ui/lab/Alert';


function SignInForm(props) {
    const { classes } = props
    const [email, updateEmail] = useInputState("")
    const [password, updatePassword] = useInputState("")
    const { authLogin, userData } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    const submitForm = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await authLogin(email, password)
            await userData()
            history.push('/')
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)
    }



    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon style={{}} />
                </Avatar>
                <Typography variant="h5">Sign In</Typography>
                {error && <Alert severity="error">{error}</Alert>}
                <form className={classes.form} onSubmit={submitForm}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" name='email' value={email} onChange={updateEmail} autoFocus></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" name='password' value={password} type='password' onChange={updatePassword} autoFocus></Input>
                    </FormControl>
                    <FormControlLabel control={<Checkbox color="primary" />} label='Remember Me' />
                    <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit} disabled={loading} >Sign In</Button>
                    <Typography className={classes.root}>
                        <Link to="/forgot-password" className={classes.link}>
                            Forgot Password?
                    </Link>
                    </Typography>
                </form>
            </Paper >
            <Typography className={classes.root}>
                Need an account? &nbsp;
                <Link to='/signup' className={classes.link}>
                    Sign Up
                    </Link>
            </Typography>
        </main >
    )
}


export default withStyles(styles)(SignInForm)