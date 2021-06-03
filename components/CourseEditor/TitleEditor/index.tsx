import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import classes from './style.module.scss'

const TitleEditor = (): JSX.Element => {

    const categories = [
        'CSharp',
        'Java',
        'Js',
        'Php',
    ];

    const [state, setState] = React.useState({
        title: "",
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
        window.localStorage.setItem('edit', JSON.stringify(state))
    }, [state])

    return (
        <div className={classes.courseEditor}>
            <Typography
                variant="h2"
            >
                Titre du cours
            </Typography>
            <TextField
                variant="outlined"
                className={classes.input}
                name="title"
                value={state.title}
                onChange={handleChange}
                label="Title"
            >
            </TextField>
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
            <div className={classes.navigation}>
                <Button className={classes.previous} href="chapterEditor">Next step</Button>
            </div>
            
        </div>
    )
}

export default TitleEditor