import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React from 'react'
import classes from './style.module.scss'

const ChapterEditor = (): JSX.Element => {
    let chapNb: number = 0;

    const [state, setState] = React.useState({
        chapterList: []
    })
    const [save, setSave] = React.useState("")

    const [newChapter, setNewChapter] = React.useState([])

    React.useEffect(() => {
        setSave(window.localStorage.getItem('edit'))
    }, [])
    console.log(save)

    const handleChange = (event: any) => {
        const value = event.target.value as string;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    console.log(newChapter)
    return (
        <div className={classes.courseEditor}>
            <Typography
                variant="h2"
            >
                Chapter 1
            </Typography>

            <div>{newChapter.map(e => {
                return <div>{e}</div>
            })}</div>

            <Button onClick={() => {
                chapNb+=1;
                setNewChapter([...newChapter, 
                    <div>
                        <Typography
                            variant="h2"
                        >
                            {"Chapter " + chapNb}
                        </Typography>
                    </div>
                ])
                
            }}>
                Add chapter
            </Button>
        </div>
    )
}

export default ChapterEditor