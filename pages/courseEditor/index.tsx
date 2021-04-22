import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import classes from './style.module.scss'

const categories = [
    'CSharp',
    'Java',
    'Js',
    'Php',
];

const CourseEditor = (): JSX.Element => {

    const [category, setCategory] = React.useState('')

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCategory(event.target.value as string)
    }

    return (
        <div>
            <FormControl 
                variant="outlined"
                className={classes.formControl}
            >
                <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
                <Select
                    labelId="category-label"
                    id="category"
                    value={category}
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

export default CourseEditor
