import CourseComments from 'components/CourseComments'
import CourseTitle from 'components/CourseTitle'
import VideoPlayer from 'components/VideoPlayer'
import React from 'react'
import classes from './style.module.scss'

const Course = (): JSX.Element => {
    return (
        <div className={classes.container}>
            <CourseTitle text="CSharp - les bases"></CourseTitle>
            <div className={classes.videoPlayer}>
                <VideoPlayer poster="/image/JDG.png" />
            </div>
            <CourseComments></CourseComments>
        </div>
    )
}

export default Course
