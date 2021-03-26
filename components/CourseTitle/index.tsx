import React from 'react'
import classes from './style.module.scss'

const CourseTitle = (props: { text: string }): JSX.Element => {
    return (
        <div className={classes.title}>
            <span>{props.text}</span>
        </div>
    )
}

export default CourseTitle
