import React, { useContext, useState } from 'react';
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
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';
import Alert from '@material-ui/lab/Alert';
import styles from '../styles/FormStyles'
import { LanguageContext } from '../contexts/LanguageContext'
import useInputState from '../hooks/useInputState'


const languages = {
    english: {
        mail: "Email",
        pass: "Password",
        passConfirm: "Confirm Password",
        signup: "Sign Up",

    },
    spanish: {
        mail: "Correo Electrónico",
        pass: "Contraseña",
        passConfirm: "confirmar Contraseña",
        signup: "Contratar",

    },
    german: {
        mail: 'Email',
        pass: 'Passwort',
        passConfirm: "Bestätige das Passwort",
        signup: "Anmelden",

    }
}



function UpdateProfile(props) {
    const { language, changeLanguage } = useContext(LanguageContext)
    const { classes } = props
    const { mail, pass, passConfirm, signup } = languages[language]
    const [email, updateEmail] = useInputState("")
    const [password, updatePassword] = useInputState("")
    const [passwordConfirm, updatePasswordConfirm] = useInputState("")
    const { currentUser, updateUserPassword, updateUserEmail } = useAuth()
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
        if (email !== currentUser.email) {
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
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email" shrink>{mail}</InputLabel>
                        <Input id="email" name='email' value={email} placeholder={currentUser.email} onChange={updateEmail} autoFocus ></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password" shrink>{pass}</InputLabel>
                        <Input id="password" name='password' value={password} placeholder="Leave blank to keep the same" onChange={updatePassword} autoFocus required={false}></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="passwordConfirm" shrink>{passConfirm}</InputLabel>
                        <Input id="password" name='password' value={passwordConfirm} placeholder="Leave blank to keep the same" onChange={updatePasswordConfirm} autoFocus required={false}></Input>
                    </FormControl>
                    <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit} disabled={loading}>Update</Button>

                </form>
            </Paper >
            <Typography className={classes.root}>
                <Link to="/">
                    Cancel
                    </Link>
            </Typography>
        </main >
    )
}


export default withStyles(styles)(UpdateProfile)