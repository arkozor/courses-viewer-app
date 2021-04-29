import {
    Box,
    Button,
    Typography,
    Grid,
    TextField,
    CircularProgress
} from '@material-ui/core'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import classes from './style.module.scss'

const Register = (): JSX.Element => {
    const router = useRouter()

    const [email, setEmail] = React.useState({
        value: '',
        isTouched: false
    })
    const [password, setPassword] = React.useState({
        value: '',
        isTouched: false
    })

    const [passwordConfirmation, setPasswordConfirmation] = React.useState('')
    const [lastname, setLastname] = React.useState('')
    const [firstname, setFirstname] = React.useState('')
    const [nickname, setNickname] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const [hasError, setHasError] = React.useState(false)

    const createAccount = async () => {
        if (canSendData) {
            setIsLoading(true)
            axios
                .post(
                    'http://idboard.net:43001/courses-viewer-api/public/index.php/api/auth/register',
                    {
                        name: lastname,
                        firstname,
                        nickname,
                        password: password.value,
                        email: email.value,
                        password_confirmation: passwordConfirmation
                    }
                )
                .then((res) => {
                    window.localStorage.setItem('token', res?.data?.data.token)
                    setIsLoading(false)
                    if (!hasError && localStorage.getItem('token')) {
                        router.push('/')
                    }
                })
                .catch(() => {
                    setIsLoading(false)
                    setHasError(true)
                })
        }
    }

    React.useEffect(() => {
        if (email.isTouched && !email.value) {
            setEmail({ ...email, isTouched: false })
        }
        if (password.isTouched && !password.value) {
            setPassword({ ...password, isTouched: false })
        }

        if (hasError) {
            setTimeout(() => {
                setHasError(false)
            }, 3000)
        }
    }, [email, password, hasError])

    const passwordValidationRegex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/gm
    const emailValidationRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm

    const validPassword = password.value.match(passwordValidationRegex)
    const validEmail = email.value.match(emailValidationRegex)

    const notValidEmail = !!email.value && email.isTouched && !validEmail
    const notValidPassword =
        !!password.value && password.isTouched && !validPassword

    const canSendData =
        !hasError &&
        !isLoading &&
        lastname &&
        firstname &&
        nickname &&
        validPassword &&
        validEmail &&
        passwordConfirmation === password.value

    return (
        <Grid container justify="center">
            <Grid item xs={10} md={6} lg={4}>
                <Box boxShadow={3} className={classes.form}>
                    <Grid container spacing={4}>
                        <Grid item>
                            <Typography variant="h1">
                                {"S'enregister"}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="none"
                                id="lastname"
                                fullWidth
                                label="Nom"
                                onChange={(e) => setLastname(e.target.value)}
                                value={lastname}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="none"
                                id="firstname"
                                fullWidth
                                label="Prénom"
                                onChange={(e) => setFirstname(e.target.value)}
                                value={firstname}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="none"
                                id="nickname"
                                fullWidth
                                label="Pseudo"
                                onChange={(e) => setNickname(e.target.value)}
                                value={nickname}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="none"
                                id="email-input"
                                fullWidth
                                label="Email"
                                value={email.value}
                                onBlur={() =>
                                    setEmail({
                                        ...email,
                                        isTouched: true
                                    })
                                }
                                onChange={(e) =>
                                    setEmail({
                                        ...email,
                                        value: e.target.value
                                    })
                                }
                                error={notValidEmail}
                                helperText={
                                    notValidEmail && "L'email n'est pas valide"
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="none"
                                id="password-input"
                                fullWidth
                                label="Mot de passe"
                                type="password"
                                value={password.value}
                                onBlur={() =>
                                    setPassword({
                                        ...password,
                                        isTouched: true
                                    })
                                }
                                onChange={(e) =>
                                    setPassword({
                                        ...password,
                                        value: e.target.value
                                    })
                                }
                                error={notValidPassword}
                                helperText={
                                    notValidPassword &&
                                    'Le mot de passe doit contenir au moins 8 caractères, une lettre, un chiffre, une majuscule et un caractère spécial'
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="none"
                                id="password-confirm-input"
                                fullWidth
                                label="Confirmation"
                                type="password"
                                onChange={(e) =>
                                    setPasswordConfirmation(e.target.value)
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                classes={{
                                    root: classes.button,
                                    disabled: classes.disabledButton
                                }}
                                variant="contained"
                                color="primary"
                                onClick={createAccount}
                                disabled={!canSendData}
                            >
                                <div className={classes.buttonText}>
                                    {hasError
                                        ? 'Une erreur est survenue'
                                        : 'Envoyer'}
                                    {isLoading && (
                                        <CircularProgress
                                            classes={{
                                                root: classes.progress
                                            }}
                                        />
                                    )}
                                </div>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Register
