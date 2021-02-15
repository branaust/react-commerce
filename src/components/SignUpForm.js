import React, { useState, useEffect } from 'react';
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
import Alert from '@material-ui/lab/Alert';
import styles from '../styles/FormStyles'
import useInputState from '../hooks/useInputState'
import { db, auth } from '../firebase'



function SignUpForm(props) {
    const { error, setError } = useAuth()
    const { classes } = props
    const [email, updateEmail] = useInputState("")
    const [password, updatePassword] = useInputState("")
    const [passwordConfirm, updatePasswordConfirm] = useInputState("")
    const { authSignup } = useAuth()
    const { setMessage } = useAuth("")
    const { loading } = useAuth()

    const submitForm = async (e) => {
        e.preventDefault()
        setError('')
        setMessage('')
        if (password !== passwordConfirm) {
            return setError("Passwords do not match")
        }
        authSignup(email, password)
    }



    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Sign Up</Typography>
                {error && <Alert severity="error">{error}</Alert>}

                <form className={classes.form} onSubmit={submitForm}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" name='email' value={email} onChange={updateEmail} autoFocus></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" name='password' type="password" value={password} onChange={updatePassword} autoFocus></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="passwordConfirm">Confirm Password</InputLabel>
                        <Input id="passwordConfirm" name='password' type="password" value={passwordConfirm} onChange={updatePasswordConfirm} autoFocus></Input>
                    </FormControl>
                    <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit} disabled={loading}>Sign Up</Button>
                </form>
            </Paper >
            <Typography className={classes.root}>
                Already have an account? &nbsp;
                <Link to="/login" className={classes.link}>
                    Log In
                    </Link>
            </Typography>
        </main >
    )
}


export default withStyles(styles)(SignUpForm)