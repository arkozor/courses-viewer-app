import React from 'react'

import { Paper, Popper } from '@material-ui/core'

import classes from './style.module.scss'

type Props = {
    content: React.ReactNode
    children: React.ReactNode
    className?: string
    placement?:
        | 'bottom-end'
        | 'bottom-start'
        | 'bottom'
        | 'left-end'
        | 'left-start'
        | 'left'
        | 'right-end'
        | 'right-start'
        | 'right'
        | 'top-end'
        | 'top-start'
        | 'top'
}

const Preview = (props: Props): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)

    const { content, children, className, placement } = props

    return (
        <div className={classes.container}>
            <span
                onMouseEnter={(event: React.MouseEvent) => {
                    event.stopPropagation()
                    setAnchorEl(event.currentTarget)
                    setIsOpen(true)
                }}
                onMouseLeave={() => {
                    setAnchorEl(null)
                    setIsOpen(false)
                }}
            >
                {children}
            </span>
            <Popper
                placement={placement}
                open={isOpen}
                anchorEl={anchorEl}
                modifiers={{
                    flip: {
                        enabled: true
                    },
                    preventOverflow: {
                        enabled: true,
                        boundariesElement: 'scrollParent'
                    }
                }}
            >
                <Paper
                    elevation={4}
                    className={classes.popover}
                    classes={{ root: className }}
                >
                    {content}
                </Paper>
            </Popper>
        </div>
    )
}

export default Preview
