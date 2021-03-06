import React from 'react'

import { Grid } from '@material-ui/core'
import axios from 'axios'
import CourseTitle from 'components/Course/CourseTitle'
import VideoPlayer from 'components/Course/CourseVideo'
import { UserContext } from 'context'
import { useRouter } from 'next/router'

import ChapterTitle from './ChapterTitle'
import CommentSection from './CommentSection'
import CourseChapter from './CourseChapter'
import CourseDescription from './CourseDescription'
import CoursePreview from './CoursePreview'
import classes from './style.module.scss'
import { CourseType } from './types'

type Props = {
    course?: CourseType
    isPreview?: boolean
}

const Course = (props: Props): JSX.Element => {
    const { course, isPreview } = props
    const [comments, setComments] = React.useState([])
    const [isNewComment, setIsNewComment] = React.useState(false)

    const router = useRouter()
    const currentUser = React.useContext(UserContext)
    const {
        chapter: chapterSearchParam,
        subchapter: subchapterSearchParam,
        id
    } = router.query

    React.useEffect(() => {
        if (currentUser && !isPreview) {
            try {
                axios
                    .get(`${process.env.COMMENT_API}/course/${id}`, {
                        headers: {
                            Authorization: `Bearer ${currentUser.token}`
                        },
                        timeout: 60000
                    })
                    .then((res) => {
                        setComments(res.data.data)
                    })
                setIsNewComment(false)
            } catch (e) {
                throw new Error('Impossible de récupérer les commentaires')
            }
        }
    }, [isNewComment])

    const chapterNumber = chapterSearchParam ? Number(chapterSearchParam) : 0

    const subChapterNumber = subchapterSearchParam
        ? Number(subchapterSearchParam)
        : 0

    const getCurrentChapter = () => {
        if (course?.chapters) {
            return course.chapters.filter(
                (chapter) => chapter.number === chapterNumber
            )[0]
        }
        return null
    }
    const getCurrentSubChapter = () => {
        if (subChapterNumber) {
            return currentChapter?.subchapters.filter(
                (subchapter) => subchapter.number === subChapterNumber
            )[0]
        }
        return null
    }

    const currentChapter = getCurrentChapter()
    const currentSubChapter = getCurrentSubChapter()

    const getIsNewComment = () => setIsNewComment(true)

    return currentUser ? (
        <div className={classes.container}>
            <CourseTitle title={course?.title} />
            <Grid container className={classes.navigationContainer}>
                <Grid item xs={12} md={8}>
                    {currentSubChapter && !isPreview ? (
                        <VideoPlayer
                            subChapter={currentSubChapter}
                            thumbnail={currentChapter?.thumbnail}
                        />
                    ) : (
                        <div className={classes.courseThumbnail}>
                            <img src={course?.thumbnail} />
                        </div>
                    )}
                </Grid>
                <Grid item xs={12} md={4}>
                    <CourseChapter
                        chapters={course?.chapters}
                        isPreview={isPreview}
                    />
                </Grid>
            </Grid>
            <ChapterTitle chapter={currentChapter} />
            <CourseDescription
                isPreview={isPreview}
                description={currentChapter?.description}
                authorId={course?.publisher_id}
            />
            {isPreview ? null : (
                <CommentSection
                    comments={comments}
                    getIsNewComment={getIsNewComment}
                />
            )}
        </div>
    ) : (
        <CoursePreview />
    )
}

export default Course
