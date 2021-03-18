import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import classes from './style.module.scss'

const CourseCard = (props): JSX.Element => {
    return (
        <div className={classes.card}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="/images/JDG.png"
                        height="180"
                        title="Vignette"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default CourseCard