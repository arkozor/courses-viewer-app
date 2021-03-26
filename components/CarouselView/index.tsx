import React from 'react'
import Carousel from 'react-elastic-carousel'
import Card from '../Card'
import classes from './style.module.scss'

type Props = {
    courseList: {
        id: number
        name: string
        description: string
    }[]
}

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 }
]

const SlideShow = ({ courseList }: Props) => {
    return (
        <div className={classes.App}>
            <Carousel
                isRTL={false}
                breakPoints={breakPoints}
                className={classes.carousel}
            >
                {courseList.map((course) => (
                    <Card
                        key={course.id}
                        name={course.name}
                        description={course.description}
                    />
                ))}
            </Carousel>
        </div>
    )
}

export default SlideShow
