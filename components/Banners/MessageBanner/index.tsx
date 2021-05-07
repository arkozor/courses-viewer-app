import React from 'react'

import { Typography, IconButton, Paper } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import classes from './style.module.scss'

type Props = {
    message: {
        value: string
        id: string
    }
}
const MessageBanner = (props: Props): JSX.Element => {
    const { message } = props
    const { pathname } = typeof window !== 'undefined' && window.location

    const [isDismissed, setIsDismissedOpen] = React.useState(true)

    React.useEffect(() => {
        if (window.localStorage.getItem(message.id) !== 'dismissed') {
            setIsDismissedOpen(false)
        }
    }, [])

    if (!message) {
        return null
    }
    return !isDismissed && pathname === '/' ? (
        <Paper elevation={2} classes={{ root: classes.container }}>
            <Typography className={classes.text} variant="body1">
                {message.value}
            </Typography>
            <IconButton
                aria-label="close-button"
                classes={{ root: classes.iconButton }}
                onClick={() => {
                    setIsDismissedOpen(true)
                    window.localStorage.setItem(message.id, 'dismissed')
                }}
                size="small"
            >
                <CloseIcon />
            </IconButton>
        </Paper>
    ) : null
}

export default MessageBanner
