import React from 'react'
import ElasticCarousel from 'react-elastic-carousel'

import { Course } from 'components/types'
import CourseCard from './CourseCard'

import classes from './style.module.scss'

type Props = {
    courseList: Course[]
}

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 }
]

const Carousel = ({ courseList }: Props): JSX.Element => {
    return (
        <div className={classes.container}>
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
