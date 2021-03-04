import { Grid } from '@material-ui/core'
import React from 'react'
import Login from './login'

const LoginPage = () => (
    <Grid container justify="center">
        <Grid item xs={10} md={6} lg={4}>
            <Login />
        </Grid>
    </Grid>
)

export default LoginPage
