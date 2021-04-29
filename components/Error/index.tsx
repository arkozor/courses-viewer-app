import { Typography } from '@material-ui/core'
import React from 'react'
import classes from './style.module.scss'

type props = {
    errorNum: string
    errorText: string
}

const Error = (props: props): JSX.Element => {
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
            <svg
                className={classes.svg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#8fe0d0"
                    fillOpacity="0.2"
                    d="M0,32L34.3,26.7C68.6,21,137,11,206,10.7C274.3,11,343,21,411,42.7C480,64,549,96,617,122.7C685.7,149,754,171,823,154.7C891.4,139,960,85,1029,80C1097.1,75,1166,117,1234,122.7C1302.9,128,1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                    data-darkreader-inline-fill=""
                ></path>
            </svg>
        </div>
    )
}

export default Error
