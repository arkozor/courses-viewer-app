import React from 'react'
import CourseCarouselSection from 'components/Homepage/CourseCarouselSection'

import HomepageBanner from 'components/Banners/HomepageBanner'
import ChipFiltersSection from 'components/Homepage/ChipFiltersSection'

const HomePage = (): JSX.Element => {
    return (
        <>
            <HomepageBanner />
            <ChipFiltersSection />
            <CourseCarouselSection />
        </>
    )
}

export default HomePage
