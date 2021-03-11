import CarousselView from 'components/CarouselView'
import React from 'react'
import ChipFilters from '../components/ChipFilters'

const HomePage = (): JSX.Element => {
    return (
        <div>
            <ChipFilters />
            <CarousselView />
            <div>Hello World</div>
        </div>
    )
}

export default HomePage
