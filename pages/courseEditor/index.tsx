import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import CourseEditor from 'components/CourseEditor';
import React from 'react'
import classes from './style.module.scss'

const categories = [
    'CSharp',
    'Java',
    'Js',
    'Php',
];

const CourseEditorPage = (): JSX.Element => {

    const [category, setCategory] = React.useState('')

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCategory(event.target.value as string)
    }

    return (
        <div>
            <CourseEditor/>
        </div>
    )
}

export default CourseEditorPage