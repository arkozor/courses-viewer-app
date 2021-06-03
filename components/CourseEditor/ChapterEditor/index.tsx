import React, { useEffect } from 'react'

import { Button, TextField, Typography } from '@material-ui/core'

import classes from './style.module.scss'

const ChapterEditor = (): JSX.Element => {

    const [state, setState] = React.useState({
        chapterList: []
    })

    let existingStorage: string = localStorage.getItem('edit');

    const [newChapter, setNewChapter] = React.useState([])

    useEffect(() => {
        existingStorage? existingStorage += window.localStorage.setItem('edit', JSON.stringify(state)): window.localStorage.setItem('edit', JSON.stringify(state))
    }, [state])

    const handleChange = (event: any) => {
        const value = event.target.value as string;
        setState({
            ...state,
            chapterList: [value]
        });
        console.log(state.chapterList[0], event.target.name);
        
    }

    return (
        <div className={classes.courseEditor}>
            <div>{newChapter.map(e => {
                return <div key={e.name}>{e}</div>
            })}</div>

            <Button onClick={() => {
                state.chapterList.push({
                    name: ""
                })
                setNewChapter([...newChapter, 
                    <div key={state.chapterList.length}>
                        <Typography
                            variant="h2"
                        >
                            {"Chapter " + state.chapterList.length}
                        </Typography>
                        <TextField
                            variant="outlined"
                            className={classes.input}
                            name={state.chapterList.length.toString()}
                            value={state.chapterList[0]}
                            onChange={handleChange}
                            label="Title"
                        >
                        </TextField>
                    </div>
                ])
                
            }}>
                Add chapter
            </Button>
        </div>
    )
}

export default ChapterEditor