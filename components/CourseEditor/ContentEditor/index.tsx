import React from 'react'

import { Button, Typography } from '@material-ui/core'

import classes from './style.module.scss'

const ContentEditor = (): JSX.Element => {
    let chapNb = 0;

    const [state, setState] = React.useState({
        chapterList: []
    })
    const [save, setSave] = React.useState("")

    const [newChapter, setNewChapter] = React.useState([])

    React.useEffect(() => {
        setSave(window.localStorage.getItem('edit'))
    }, [])

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
                Chapter ? content
            </Typography>

            <div>{newChapter.map(e => {
                return <div key={e.name}>{e}</div>
            })}</div>

            <Button onClick={() => {
                chapNb+=1;
                setNewChapter([...newChapter, 
                    <div key={chapNb}>
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

export default ContentEditor