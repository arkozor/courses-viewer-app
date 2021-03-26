import React from 'react'
import Carousel from 'components/Carousel'
import courses from 'components/Carousel/CoursesProvider/courses.json'

import HomepageBanner from '../components/Banners/HomepageBanner'

const HomePage = (): JSX.Element => {
    return (
        <>
            <HomepageBanner />
            <Carousel courseList={courses} />
        </>
    )
}

export default HomePage
