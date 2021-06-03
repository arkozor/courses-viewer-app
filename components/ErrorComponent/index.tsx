import React from 'react'

import { Typography } from '@material-ui/core'

import Error404 from './ErrorImg/404.svg'
import classes from './style.module.scss'

type Props = {
    errorText: string
    errorCode?: string
    fullPage?: boolean
}
const ErrorComponent = (props: Props): JSX.Element => {
    const { errorText, errorCode, fullPage } = props
    return (
        <div className={classes.container}>
            <div>
                {errorCode && <Typography variant="h1">{errorCode}</Typography>}

                <Typography variant="h1">{errorText}</Typography>
            </div>

            <img
                className={classes.logo}
                src="/images/error_logo_.png"
                alt="nul"
            />
            {fullPage && <Error404 className={classes.wave} />}
        </div>
    )
}

export default ErrorComponent
