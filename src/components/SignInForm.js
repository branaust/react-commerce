import React, { useContext, useState } from 'react';
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
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../styles/FormStyles'
import { LanguageContext } from '../contexts/LanguageContext'
import useInputState from '../hooks/useInputState'

import Alert from '@material-ui/lab/Alert';

const languages = {
    english: {
        mail: "Email",
        pass: "Password",
        remember: "Remember Me",
        signin: "Sign In",

    },
    spanish: {
        mail: "Correo Electrónico",
        pass: "Contraseña",
        remember: "Recuérdame",
        signin: "Registrarse",

    },
    german: {
        mail: 'Email',
        pass: 'Passwort',
        remember: "Behalte mich in Erinnerung",
        signin: "Einloggen",

    }
}



function SignInForm(props) {
    const { language, changeLanguage } = useContext(LanguageContext)
    const { classes } = props
    const { mail, pass, remember, signin } = languages[language]
    const [email, updateEmail] = useInputState("")
    const [password, updatePassword] = useInputState("")
    const { authLogin } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const submitForm = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await authLogin(email, password)
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
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{signin}</Typography>
                <Select value={language} onChange={changeLanguage}>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="spanish">Spanish</MenuItem>
                    <MenuItem value="german">German</MenuItem>
                </Select>
                {error && <Alert severity="error">{error}</Alert>}
                <form className={classes.form} onSubmit={submitForm}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">{mail}</InputLabel>
                        <Input id="email" name='email' value={email} onChange={updateEmail} autoFocus></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">{pass}</InputLabel>
                        <Input id="password" name='password' value={password} onChange={updatePassword} autoFocus></Input>
                    </FormControl>
                    <FormControlLabel control={<Checkbox color="primary" />} label={remember} />
                    <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit} disabled={loading}>{signin}</Button>
                    <Typography className={classes.root}>
                        <Link href="#">
                            Forgot Password?
                    </Link>
                    </Typography>
                </form>
            </Paper >
            <Typography className={classes.root}>
                Need an account? &nbsp;
                <Link to='/signup'>
                    Sign Up
                    </Link>
            </Typography>
        </main >
    )
}


export default withStyles(styles)(SignInForm)