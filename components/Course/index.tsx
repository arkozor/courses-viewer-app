import CourseComments from 'components/Course/CourseComments'
import CourseTitle from 'components/Course/CourseTitle'
import VideoPlayer from 'components/Course/VideoPlayer'
import React from 'react'
import classes from './style.module.scss'

const commentList = [
    {
        author: 'James',
        body: '1er commentaire.',
        answers: [
            {
                author: 'Johanna',
                body: 'Félicitation.'
            }
        ]
    },
    {
        author: 'John',
        body: "Super cours, j'adore !"
    },
    {
        author: 'Jackie',
        body:
            'khoezihaojdazp hoazhoi azhoi zoiah ozahoi azhoidhaz oiihdoai hd oahzoiz hozahdoidh aoizhd oiiazhoidh zoiifh oiahfoi.'
    }
]

const Course = (): JSX.Element => {
    return (
        <div className={classes.comment}>
            <CourseTitle text="CSharp - les bases"></CourseTitle>
            <VideoPlayer poster={'/images/JDG.png'} />
            <CourseComments comments={commentList} />
        </div>
    )
}

export default Course
