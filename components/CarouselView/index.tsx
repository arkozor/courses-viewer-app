import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

const CarousselView = (): JSX.Element => {

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    function Item(props)
    {
        return (
            <div>
                <Paper>
                    <h2>{props.item.name}</h2>
                    <p>{props.item.description}</p>

                    <Button className="CheckButton">
                        Check it out!
                    </Button>
                </Paper>
            </div>
        )
    }

    return (
        <Carousel autoPlay={false} animation="slide" indicators={false}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default CarousselView