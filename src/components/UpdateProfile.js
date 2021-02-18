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

    const {
        firstName,
        updateFirstName,
        lastName,
        updateLastName,
        ebayUserName,
        updateEbayUserName,
        currentUser,
        updateUserPassword,
        updateUserEmail,
        updateUserInfo,
        currentUserData
    } = useAuth()

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
            updateUserEmail(email)
        }
        if (password) {
            promises.push(updateUserPassword(password))
        }
        if (firstName || lastName || ebayUserName) {
            updateUserInfo(firstName, lastName, ebayUserName)
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
                        <Input id="email" name='email' value={email} placeholder={currentUser.email} onChange={updateEmail} autoFocus required={false} ></Input>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="password" shrink>Password</InputLabel>
                        <Input id="password" name='password' value={password} placeholder="Leave blank to keep the same" type="password" onChange={updatePassword} autoFocus required={false}></Input>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="passwordConfirm" shrink>Confirm Password</InputLabel>
                        <Input id="passwordConfirm" name='passwordConfirm' value={passwordConfirm} type="password" onChange={updatePasswordConfirm} autoFocus required={false}></Input>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="firstName" shrink>First Name</InputLabel>
                        <Input id="firstName" name='firstName' placeholder={currentUserData.firstName} onChange={updateFirstName} autoFocus required={false}></Input>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="lastName" shrink>Last Name</InputLabel>
                        <Input id="lastName" name='lastName' placeholder={currentUserData.lastName} onChange={updateLastName} autoFocus required={false}></Input>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="ebayUserName" shrink>Ebay Username</InputLabel>
                        <Input id="ebayUserName" name='ebayUserName' placeholder={currentUserData.ebayUserName} onChange={updateEbayUserName} autoFocus required={false}></Input>
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