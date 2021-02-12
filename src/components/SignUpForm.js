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
import { AuthContext } from '../contexts/AuthContext'
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



function SignUpForm(props) {
    const { language, changeLanguage } = useContext(LanguageContext)
    const { error, setError } = useAuth()
    const { classes } = props
    const { mail, pass, passConfirm, signup } = languages[language]
    const [email, updateEmail] = useInputState("")
    const [password, updatePassword] = useInputState("")
    const [passwordConfirm, updatePasswordConfirm] = useInputState("")
    const { authSignup, success } = useAuth()
    const { message, setMessage } = useAuth("")
    const { loading, setLoading } = useAuth(false)
    const history = useHistory()

    const submitForm = async (e) => {
        e.preventDefault()
        setError("")

        if (password !== passwordConfirm) {
            return setError("Passwords do not match")
        }
        setError('')
        setMessage('')

        await authSignup(email, password)
    }



    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{signup}</Typography>
                <Select value={language} onChange={changeLanguage}>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="spanish">Spanish</MenuItem>
                    <MenuItem value="german">German</MenuItem>
                </Select>
                {error && <Alert severity="error">{error}</Alert>}
                {message && <Alert severity="success">{message}</Alert>}
                <form className={classes.form} onSubmit={submitForm}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">{mail}</InputLabel>
                        <Input id="email" name='email' value={email} onChange={updateEmail} autoFocus></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">{pass}</InputLabel>
                        <Input id="password" name='password' value={password} onChange={updatePassword} autoFocus></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="passwordConfirm">{passConfirm}</InputLabel>
                        <Input id="password" name='password' value={passwordConfirm} onChange={updatePasswordConfirm} autoFocus></Input>
                    </FormControl>
                    <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit} disabled={loading}>{signup}</Button>

                </form>
            </Paper >
            <Typography className={classes.root}>
                Already have an account? &nbsp;
                <Link to="/login">
                    Log In
                    </Link>
            </Typography>
        </main >
    )
}


export default withStyles(styles)(SignUpForm)