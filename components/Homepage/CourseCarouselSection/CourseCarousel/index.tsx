import React from 'react'

import { Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import ElasticCarousel from 'react-elastic-carousel'

import { CoursePreview } from '../types'
import CourseCard from './CourseCard'
import classes from './style.module.scss'

type Props = {
    coursesPreviewList: CoursePreview[]
    title?: string
}

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 650, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
    { width: 1650, itemsToShow: 5 }
]

const Carousel = (props: Props): JSX.Element => {
    const { coursesPreviewList, title } = props

    const [carouselCourses, setCarouselCourses] =
        React.useState(coursesPreviewList)
    const router = useRouter()

    React.useEffect(() => {
        if (router.query[title]) {
            setCarouselCourses(
                coursesPreviewList.filter(
                    (coursePreview) =>
                        coursePreview.domain_id === Number(router.query[title])
                )
            )
        }
    }, [router.query[title]])

    const courses = router.query[title] ? carouselCourses : coursesPreviewList

    return carouselCourses.length ? (
        <div className={classes.container}>
            <ElasticCarousel
                itemPadding={[4, 4]}
                isRTL={false}
                breakPoints={breakPoints}
                disableArrowsOnEnd={true}
                pagination={true}
                enableTilt={true}
            >
                {courses.map((course) => (
                    <CourseCard course={course} key={course.id} />
                ))}
            </ElasticCarousel>
        </div>
    ) : (
        <div className={classes.empty}>
            <Typography variant="h4">
                Aucun cours ne correspond au filtre sélectionné
            </Typography>
        </div>
    )
}

export default Carousel
