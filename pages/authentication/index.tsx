import { Grid } from '@material-ui/core'
import React from 'react'
import Login from './login'
import SignIn from './signIn'

const LoginPage = () => (
    <Grid container justify="center">
        <Grid item xs={10} md={6} lg={4}>
            <SignIn/>
        </Grid>
    </Grid>
)

export default LoginPage