import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
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

function UpdateProfile(props) {
    const { classes } = props
    const [email, updateEmail] = useInputState("")
    const [password, updatePassword] = useInputState("")
    const [passwordConfirm, updatePasswordConfirm] = useInputState("")
    const [bio, updateBio] = useInputState("")
    const { user, updateUserPassword, updateUserEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const submitForm = (e) => {
        e.preventDefault()

        if (password !== passwordConfirm) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError("")
        if (email) {
            promises.push(updateUserEmail(email))
        }
        if (password) {
            promises.push(updateUserPassword(password))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })

    }



    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Update Profile</Typography>
                {error && <Alert severity="error">{error}</Alert>}

                <form className={classes.form} onSubmit={submitForm}>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="email" shrink>Email</InputLabel>
                        <Input id="email" name='email' value={email} placeholder={user.email} onChange={updateEmail} autoFocus required={false} ></Input>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="password" shrink>Password</InputLabel>
                        <Input id="password" name='password' value={password} placeholder="Leave blank to keep the same" type="password" onChange={updatePassword} autoFocus required={false}></Input>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="passwordConfirm" shrink>Confirm Password</InputLabel>
                        <Input id="password" name='password' value={passwordConfirm} type="password" onChange={updatePasswordConfirm} autoFocus required={false}></Input>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="bio" shrink>Bio</InputLabel>
                        <Input id="bio" name='bio' onChange={updateBio} autoFocus required={false}></Input>
                    </FormControl>

                    <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit} disabled={loading}>Update</Button>

                </form>
            </Paper >
            <Typography className={classes.root}>
                <Link to="/" className={classes.link}>
                    Cancel
                    </Link>
            </Typography>
        </main >
    )
}


export default withStyles(styles)(UpdateProfile)