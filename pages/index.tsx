import React from 'react'
import ChipFilters from 'components/ChipFilters'
import Carousel from 'components/Carousel'
import courses from 'components/Carousel/CoursesProvider/courses.json'

const HomePage = (): JSX.Element => {
    return (
        <div>
            <ChipFilters />
            <Carousel courseList={courses} />
        </div>
    )
}

export default HomePage
