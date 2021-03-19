import React from 'react'
import ChipFilters from '../components/ChipFilters'
import Carousel from '../components/CarouselView'
import { courses } from '../components/CoursesProvider'

const HomePage = (): JSX.Element => {
    return (
        <div>
            <ChipFilters />
            <Carousel courseList={courses} />
        </div>
    )
}

export default HomePage
