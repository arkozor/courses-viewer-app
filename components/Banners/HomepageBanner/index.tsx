import React from 'react'

import { Paper, Link } from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import classes from './style.module.scss'

const HomepageBanner = (): JSX.Element => {
    return (
        <div className={classes.container}>
            <Paper elevation={2} className={classes.imgContainer}>
                <Link href="/promotion/id">
                    <LazyLoadImage
                        width="100%"
                        height="100%"
                        src="https://www.cae.net/wp-content/uploads/2019/01/elearning-trends-2019.jpg.webp"
                        useIntersectionObserver
                    />
                </Link>
            </Paper>
        </div>
    )
}

export default HomepageBanner
