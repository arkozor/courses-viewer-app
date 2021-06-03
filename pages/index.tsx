import React from 'react'

import HomepageBanner from 'components/Banners/HomepageBanner'
import ChipFiltersSection from 'components/Homepage/ChipFiltersSection'
import CourseCarouselSection from 'components/Homepage/CourseCarouselSection'

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
