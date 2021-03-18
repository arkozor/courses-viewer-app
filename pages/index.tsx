import Card from 'components/Card'
import React from 'react'
import ChipFilters from '../components/ChipFilters'
import Carousel from '../components/CarouselView'

const HomePage = (): JSX.Element => {
    return (
        <div>
            <ChipFilters />
            <Card
                name={'Java'}
                description={'Ceci est un super cours de Java.'}
            />
            <Carousel />
            <div>Hello World</div>
        </div>
    )
}

export default HomePage
