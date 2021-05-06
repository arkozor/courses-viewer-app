import {
    Typography,
    Button,
    TextField,
    CircularProgress,
    Grid
} from '@material-ui/core'

import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import classes from './style.module.scss'

type LoginPostParams = {
    email: string
    password: string
}

const Login = (): JSX.Element => {
    const router = useRouter()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [hasError, setHasError] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const localStorage = typeof window !== 'undefined' && window.localStorage

    React.useEffect(() => {
        if (hasError) {
            setTimeout(() => {
                setHasError(false)
            }, 3000)
        }
    }, [hasError])

    const handleEmail = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setEmail(e.currentTarget.value)
    }
    const handlePassword = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setPassword(e.currentTarget.value)
    }

    const signIn = async ({ email, password }: LoginPostParams) => {
        setIsLoading(true)
        await axios
            .post(`${process.env.AUTH_API}/login`, {
                email,
                password
            })
            .then((res) => localStorage.setItem('token', res.data.data.token))
            .catch(() => {
                setHasError(true)
                setIsLoading(false)
            })
        if (!hasError && localStorage.getItem('token')) {
            setIsLoading(false)
            router.push('/')
        }
    }

    return (
        <Grid container justify="center">
            <Grid item xs={10} md={6} lg={4}>
                <div className={classes.form}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography variant="h4">CONNEXION</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                onChange={(e) => handleEmail(e)}
                                value={email}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        signIn({ email, password })
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Mot de passe"
                                type="password"
                                onChange={(e) => handlePassword(e)}
                                value={password}
                                helperText={
                                    hasError && (
                                        <Typography
                                            variant="subtitle1"
                                            color="error"
                                        >
                                            Une erreur est survenue
                                        </Typography>
                                    )
                                }
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        signIn({ email, password })
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <div>
                                <Button
                                    classes={{
                                        root: classes.button
                                    }}
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                        signIn({ email, password })
                                    }}
                                    disabled={
                                        !email ||
                                        !password ||
                                        isLoading ||
                                        hasError
                                    }
                                >
                                    <div className={classes.buttonText}>
                                        Se connecter
                                        {isLoading && (
                                            <CircularProgress
                                                classes={{
                                                    root: classes.progress
                                                }}
                                            />
                                        )}
                                    </div>
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    )
}
export default Login
