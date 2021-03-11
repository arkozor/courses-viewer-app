import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import classes from './style.module.scss'

const CarousselView = (): JSX.Element => {

    var items = [
        {
            name: "Java for beginners",
            description: "Probably the best Java course you have ever seen!"
        },
        {
            name: "C# for beginners",
            description: "Probably the best C# course you have ever seen!"
        }
    ]

    function Item(props)
    {
        return (
            <div className={classes.carousel}>
                <h1>{"Les plus suivis"}</h1>
                <Paper>
                    <div className={classes.courseList}>
                        <div className={classes.course}>
                            <div className={classes.vignette}>
                                <h2 className={classes.title}>{props.item.name}</h2>
                            </div>
                            <div className={classes.description}>
                                <p>{props.item.description}</p>
                            </div>
                        </div>
                        <div className={classes.course}>
                            <div className={classes.vignette}>
                                <h2 className={classes.title}>{props.item.name}</h2>
                            </div>
                            <div className={classes.description}>
                                <p>{props.item.description}</p>
                            </div>
                        </div>
                        <div className={classes.course}>
                            <div className={classes.vignette}>
                                <h2 className={classes.title}>{props.item.name}</h2>
                            </div>
                            <div className={classes.description}>
                                <p>{props.item.description}</p>
                            </div>
                        </div>
                    </div>
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