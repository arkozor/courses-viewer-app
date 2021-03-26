import CourseComments from 'components/CourseComments'
import CourseTitle from 'components/CourseTitle'
import React from 'react'
import classes from './style.module.scss'

const Course = (): JSX.Element => {
    return (
        <div className={classes.comment}>
            <CourseTitle text="CSharp - les bases"></CourseTitle>
            <CourseComments comments={[]}></CourseComments>
        </div>
    )
}

export default Course
