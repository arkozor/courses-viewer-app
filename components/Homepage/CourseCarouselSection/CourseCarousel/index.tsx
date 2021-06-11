import React from 'react'

import { Typography } from '@material-ui/core'
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

    return (
        <div className={classes.container}>
            {title && (
                <div className={classes.titleContainer}>
                    <Typography gutterBottom variant="h4">
                        {title}
                    </Typography>
                </div>
            )}

            <ElasticCarousel
                itemPadding={[4, 4]}
                isRTL={false}
                breakPoints={breakPoints}
                disableArrowsOnEnd={true}
                pagination={true}
                enableTilt={true}
            >
                {coursesPreviewList.map((course) => (
                    <CourseCard
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        description={course.description}
                        thumbnail={course.thumbnail}
                    />
                ))}
            </ElasticCarousel>
        </div>
    )
}

export default Carousel
