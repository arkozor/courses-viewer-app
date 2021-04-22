import { Box, Button, Grid, TextField } from '@material-ui/core'
import React from 'react'
import classes from './style.module.scss'

const Register = (): JSX.Element => {
    return (
        <Grid container justify="center">
            <Grid item xs={10} md={6} lg={4}>
                <Box boxShadow={3}>
                    <form className={classes.form} noValidate autoComplete="off">
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <h1>{"S'ENREGISTER"}</h1>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="email-input" fullWidth label="Email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="password-input"
                                    fullWidth
                                    label="Mot de passe"
                                    type="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="password-confirm-input"
                                    fullWidth
                                    label="Confirmation"
                                    type="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    classes={{ root: classes.button }}
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                        window.location.pathname = '/'
                                    }}
                                >
                                    {'Envoyer'}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
        
    )
}

export default Register
