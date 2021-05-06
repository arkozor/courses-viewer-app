import CourseTitle from 'components/Course/CourseTitle'
import VideoPlayer from 'components/Course/CourseVideo'
import { useRouter } from 'next/router'
import React from 'react'
import CommentSection from './CommentSection'
import CourseChapter from './CourseChapter'
import ChapterTitle from './ChapterTitle'
import CourseDescription from './CourseDescription'
import classes from './style.module.scss'
import { ChapterType, CourseType, SubChapterType } from './types'

const commentList = [
    {
        author: 'James',
        body: 'FIRST',
        answers: [
            {
                author: 'Johanna',
                body: 'On peut éviter ce genre de commentaires sur les cours ?'
            }
        ]
    },
    {
        author: 'Mark',
        body: 'Merci'
    },
    {
        author: 'Phil',
        body: 'Génial !'
    },
    {
        author: 'Roger',
        body: 'Toujours au top !'
    },
    {
        author: 'Benoit',
        body: 'Super cours, merci!'
    },
    {
        author: 'John',
        body: "Super cours, j'adore !"
    },
    {
        author: 'Jackie',
        body: 'Comment ça se fait que le cours ne soit pas disponible ?',
        answers: [
            {
                author: 'Johanna',
                body: 'Les serveurs de vidéos sont down pour le moment ...'
            },
            {
                author: 'Mathieu',
                body: 'La lose :/'
            },
            {
                author: 'Benoit',
                body: "C'est dispo !"
            },
            {
                author: 'Johanna',
                body: 'Super !'
            }
        ]
    }
]

type Props = {
    course?: CourseType
}

const Course = (props: Props): JSX.Element => {
    const { course } = props

    const router = useRouter()

    const {
        chapter: chapterSearchParam,
        subchapter: subchapterSearchParam
    } = router.query

    const chapterNumber = chapterSearchParam ? Number(chapterSearchParam) : 0

    const subChapterNumber = subchapterSearchParam
        ? Number(subchapterSearchParam)
        : 0

    const getCurrentChapter = (): ChapterType | SubChapterType => {
        if (course?.chapters) {
            if (subChapterNumber) {
                return course?.chapters[chapterNumber]?.subchapters[
                    subChapterNumber
                ]
            } else {
                return course?.chapters[chapterNumber]
            }
        }
        return null
    }

    const currentChapter = getCurrentChapter()

    return (
        <div className={classes.container}>
            <CourseTitle title={course?.title} />
            <div className={classes.navigationContainer}>
                <VideoPlayer chapter={currentChapter} />
                <CourseChapter chapters={course?.chapters} />
            </div>
            <ChapterTitle chapter={currentChapter} />
            <CourseDescription
                description={currentChapter?.description}
                authorId={course?.publisher_id}
            />
            <CommentSection comments={commentList} />
        </div>
    )
}

export default Course
