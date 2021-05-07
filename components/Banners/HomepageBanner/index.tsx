import React from 'react'

import { Paper, Link } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

import classes from './style.module.scss'

//this component should load the img and the link from the server
const HomepageBanner = (): JSX.Element => {
    const [isLoading, setIsLoading] = React.useState(true)
    //Remove the useEffect when we will fetch real data for the banner
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 800)
    })

    return (
        <div className={classes.container}>
            <Paper elevation={2} className={classes.imgContainer}>
                {isLoading ? (
                    <Skeleton
                        animation="pulse"
                        variant="rect"
                        className={classes.img}
                    />
                ) : (
                    <Link href="/promotion/id">
                        <img
                            className={classes.img}
                            src="https://www.cae.net/wp-content/uploads/2019/01/elearning-trends-2019.jpg.webp"
                            aria-label="promotion-banner"
                        />
                    </Link>
                )}
            </Paper>
        </div>
    )
}

export default HomepageBanner
