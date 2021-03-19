import React from 'react'
import Carousel from 'react-elastic-carousel'
import classes from './style.module.scss'

const courses = [
    {
        id: 1,
        title: 'card'
    },
    {
        id: 2,
        title: 'card'
    },
    {
        id: 3,
        title: 'card'
    },
    {
        id: 4,
        title: 'card'
    },
    {
        id: 5,
        title: 'card'
    },
    {
        id: 6,
        title: 'card'
    },
    {
        id: 7,
        title: 'card'
    },
    {
        id: 8,
        title: 'card'
    },
    {
        id: 9,
        title: 'card'
    },
    {
        id: 10,
        title: 'card'
    },
    {
        id: 11,
        title: 'card'
    },
    {
        id: 11,
        title: 'card'
    }
]

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 }
]

const SlideShow = () => {
    return (
        <div className={classes.app}>
            <Carousel
                isRTL={false}
                breakPoints={breakPoints}
                className={classes.carousel}
            >
                {courses.map((course) => (
                    <div key={course.id} className={classes.carouselItem}>
                        <div className={classes.card}>
                            <h2>{course.title}</h2>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default SlideShow
