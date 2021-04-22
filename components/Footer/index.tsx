import classes from './style.module.scss'
import Breadcrumbs from 'components/Header/BreadCrumb'
import React from 'react'
import { Typography } from '@material-ui/core'

const Footer = (): JSX.Element => {
    return (
        <div className={classes.footer}>
            <div className={classes.upperPart}>
                <Breadcrumbs />
            </div>

            <div className={classes.lowerPart}>
                <Typography color="textPrimary" style={{ fontWeight: 500 }}>
                    Copyright : visionneuse de cours
                </Typography>
            </div>
        </div>
    )
}

export default Footer
