import React from 'react'

import CourseEditor from 'components/CourseEditor';

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