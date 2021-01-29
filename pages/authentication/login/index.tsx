import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'
import classes from './style.module.scss'

const Login = () => {
    return (
        <form className={classes.form} noValidate autoComplete="off">
            <Grid container xs={8} md={6} spacing={4}>
                <Grid item xs={12}>
                    <h1>CONNEXION</h1>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="email-input" fullWidth label="Email"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="password-input" fullWidth label="Mot de passe" type="password" />
                </Grid>
                <Grid item xs={12}>
                    <Button classes={{root:classes.button}} variant="contained" color="primary" onClick={() => {window.location.pathname='/'}}>Se connecter</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default Login