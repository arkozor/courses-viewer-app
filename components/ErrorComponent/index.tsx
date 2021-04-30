import { Typography } from '@material-ui/core'
import React from 'react'
import Error404 from './ErrorImg/404.svg'
import classes from './style.module.scss'

type props = {
    errorNum: string
    errorText: string
}

const ErrorComponent = (props: props): JSX.Element => {
    const { errorNum, errorText } = props
    return (
        <div className={classes.container}>
            <div className={classes.logoContainer}>
                <img
                    className={classes.logo}
                    src="/images/error_logo_.png"
                    alt="nul"
                />
            </div>
            <Typography variant="h1" component="h2">
                {errorNum}
            </Typography>
            <Typography variant="subtitle1" component="h2">
                {errorText}
            </Typography>
            <img className={classes.img} src={Error404} />
        </div>
    )
}

export default ErrorComponent
