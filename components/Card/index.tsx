import React from 'react'
import classes from './style.module.scss'

const Card = (props): JSX.Element => {

    return (
        <div className={classes.course}>
            <div className={classes.vignette}>
                <h2 className={classes.title}>{props.name}</h2>
            </div>
            <div className={classes.description}>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card