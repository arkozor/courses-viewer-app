import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React from 'react'
import classes from './style.module.scss'

const ChapterEditor = (): JSX.Element => {

    const [state, setState] = React.useState({
        title: "",
        category: ""
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

    return (
        <div className={classes.courseEditor}>
            <Typography
                variant="h2"
            >
                Chapter 1
            </Typography>

            <Button onClick={() => {
                setNewChapter([
                    <div>
                        <Typography
                            variant="h2"
                        >
                            Chapter 1
                        </Typography>
                    </div>
                ])
            }}>dsezv</Button>
        </div>
    )
}

export default ChapterEditor