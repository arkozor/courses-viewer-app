import React from 'react'

import HomepageBanner from 'components/Banners/HomepageBanner'
import CourseCarouselSection from 'components/Homepage/CourseCarouselSection'

const HomePage = (): JSX.Element => {
    return (
        <>
            <HomepageBanner />
            <CourseCarouselSection />
        </>
    )
}

export default HomePage
