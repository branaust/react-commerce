import React, { useContext } from 'react';
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
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../styles/FormStyles'
import { LanguageContext } from '../contexts/LanguageContext'
import useInputState from '../hooks/useInputState'
import { DisplayContext } from '../contexts/DisplayContext'

const languages = {
    english: {
        email: "Email",
        password: "Password",
        remember: "Remember Me",
        signin: "Sign In",

    },
    spanish: {
        email: "Correo Electrónico",
        password: "Contraseña",
        remember: "Recuérdame",
        signin: "Registrarse",

    },
    german: {
        email: 'Email',
        password: 'Passwort',
        remember: "Behalte mich in Erinnerung",
        signin: "Einloggen",

    }
}



function SignInForm(props) {
    const { language, changeLanguage } = useContext(LanguageContext)
    const { toggleIsSignIn } = useContext(DisplayContext)
    const { classes } = props
    const { email, password, remember, signin } = languages[language]
    const [mail, updateMail, resetMail] = useInputState("")
    const [pass, updatePass, resetPass] = useInputState("")

    const submitForm = (e) => {
        e.preventDefault()
        resetMail()
        resetPass()
        toggleIsSignIn()
        console.log(mail, pass)
    }

    const toggleSignUp = e => {
        e.preventDefault()
        toggleIsSignIn()
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
                <form className={classes.form} onSubmit={submitForm}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">{email}</InputLabel>
                        <Input id="email" name='email' value={mail} onChange={updateMail} autoFocus></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">{password}</InputLabel>
                        <Input id="password" name='password' value={pass} onChange={updatePass} autoFocus></Input>
                    </FormControl>
                    <FormControlLabel control={<Checkbox color="primary" />} label={remember} />
                    <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>{signin}</Button>
                    <Typography className={classes.root}>
                        <Link href="#">
                            Forgot Password?
                    </Link>
                    </Typography>
                </form>
            </Paper >
            <Typography className={classes.root}>
                Need an account? &nbsp;
                <Link onClick={toggleSignUp}>
                    Sign Up
                    </Link>
            </Typography>
        </main >
    )
}


export default withStyles(styles)(SignInForm)