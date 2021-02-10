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
import styles from './styles/FormStyles'
import { LanguageContext } from './contexts/LanguageContext'
import useInputState from './hooks/useInputState'
import { DisplayContext } from './contexts/DisplayContext'

const languages = {
    english: {
        email: "Email",
        password: "Password",
        passwordConfirm: "Confirm Password",
        signup: "Sign Up",

    },
    spanish: {
        email: "Correo Electrónico",
        password: "Contraseña",
        passwordConfirm: "confirmar Contraseña",
        signup: "Contratar",

    },
    german: {
        email: 'Email',
        password: 'Passwort',
        passwordConfirm: "Bestätige das Passwort",
        signup: "Anmelden",

    }
}



function SignUpForm(props) {
    const { language, changeLanguage } = useContext(LanguageContext)
    const { toggleIsSignIn } = useContext(DisplayContext)
    const { classes } = props
    const { email, password, passwordConfirm, remember, signup } = languages[language]
    const [mail, updateMail, resetMail] = useInputState("")
    const [pass, updatePass, resetPass] = useInputState("")
    const [passConfirm, updatePassConfirm, resetPassConfirm] = useInputState("")

    const submitForm = (e) => {
        e.preventDefault()
        resetMail()
        resetPass()
        resetPassConfirm()
        toggleIsSignIn()
        console.log(mail, pass)
    }

    const toggleSignIn = (e) => {
        e.preventDefault()
        toggleIsSignIn()
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
                <form className={classes.form} onSubmit={submitForm}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">{email}</InputLabel>
                        <Input id="email" name='email' value={mail} onChange={updateMail} autoFocus></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">{password}</InputLabel>
                        <Input id="password" name='password' value={pass} onChange={updatePassConfirm} autoFocus></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="passwordConfirm">{passwordConfirm}</InputLabel>
                        <Input id="password" name='password' value={passConfirm} onChange={updatePass} autoFocus></Input>
                    </FormControl>
                    <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>{signup}</Button>

                </form>
            </Paper >
            <Typography className={classes.root}>
                Already have an account? &nbsp;
                <Link onClick={toggleSignIn}>
                    Sign In
                    </Link>
            </Typography>
        </main >
    )
}


export default withStyles(styles)(SignUpForm)