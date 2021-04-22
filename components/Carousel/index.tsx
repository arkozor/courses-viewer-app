import React from 'react'
import ElasticCarousel from 'react-elastic-carousel'

import { Course } from 'components/types'
import CourseCard from '../CourseCard'

import classes from './style.module.scss'
import { Typography } from '@material-ui/core'

type Props = {
    courseList: Course[]
    title: string
}

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 650, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
    { width: 1650, itemsToShow: 5 }
]

const Carousel = ({ courseList, title }: Props): JSX.Element => {
    return (
        <div className={classes.container}>
            <div className={classes.typo}>
                <Typography
                    gutterBottom
                    variant="h4"
                    style={{ fontWeight: 500 }}
                >
                    {title}
                </Typography>
            </div>

            <ElasticCarousel
                itemPadding={[4, 4]}
                isRTL={false}
                breakPoints={breakPoints}
                disableArrowsOnEnd={false}
                pagination={true}
                enableTilt={true}
            >
                {courseList.map((course) => (
                    <CourseCard
                        key={course.id}
                        name={course.name}
                        description={course.description}
                        url={course.url}
                    />
                ))}
            </ElasticCarousel>
        </div>
    )
}

export default Carousel
