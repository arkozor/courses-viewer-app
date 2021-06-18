import React, { useEffect } from 'react'

import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'

import classes from '../style.module.scss'

type Props = {
    getTitle: (data: any) => void
}

const TitleEditor = ({getTitle: getTitle}: Props): JSX.Element => {

    const categories = [
        'CSharp',
        'Java',
        'Js',
        'Php',
    ];

    const save = typeof window != "undefined" ? JSON.parse(window.localStorage.getItem("editorHead")) : undefined

    const [state, setState] = React.useState({
        title: save?.title,
        category: ""
    })
    

    const handleChange = (event: any) => {
        const value = event.target.value as string;
        setState({
            ...state,
            [event.target.name]: value
        })
    }

    useEffect(() => {
        if (getTitle){
            getTitle(state)
        }
    }, [state])

    return (
        <div className={classes.courseEditor}>
            <Typography
                variant="h2"
            >
                Titre du cours
            </Typography>
            <FormControl 
                variant="outlined"
                className={classes.formControl}
            >
                <TextField
                    variant="outlined"
                    className={classes.input}
                    name="title"
                    value={state.title}
                    onChange={handleChange}
                    label="Title"
                >
                </TextField>
            </FormControl>
            <Typography
                variant="h2"
            >
                Catégrie du cours
            </Typography>
            <FormControl 
                variant="outlined"
                className={classes.formControl}
            >
                <InputLabel 
                    id="category-input"
                    className={classes.input}
                >
                    Category
                </InputLabel>
                <Select
                    name="category"
                    value={state.category}
                    onChange={handleChange}
                    label="category"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default TitleEditor