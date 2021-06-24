import React from 'react'

import Course from 'components/Course'
import { CourseType } from 'components/Course/types'

import classes from './style.module.scss'

const ValidationStep = (): JSX.Element => {
    const parsedLocalStorageCourse: CourseType =
        typeof window !== 'undefined' &&
        JSON.parse(localStorage.getItem('course'))

    return (
        <div className={classes.container}>
            <Course course={parsedLocalStorageCourse} isPreview />
        </div>
    )
}

export default ValidationStep
