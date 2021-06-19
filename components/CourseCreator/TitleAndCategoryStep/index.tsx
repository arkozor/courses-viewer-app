import React from 'react'

import { Typography, MenuItem, Select, TextField } from '@material-ui/core'
import { CategoryFilter } from 'components/Filters/SearchFilters/type'

import { PostCourseArgs } from '../type'
import classes from './style.module.scss'

type Props = {
    categories: CategoryFilter[]
}

const TitleAndCategoryStep = ({ categories }: Props): JSX.Element => {
    const localStorageCourse =
        typeof window !== 'undefined' && localStorage.getItem('course')
    const parsedLocalStorageCourse: PostCourseArgs = JSON.parse(
        localStorageCourse
    )

    const [category, setCategory] = React.useState(
        parsedLocalStorageCourse?.category_id
    )
    const [title, setTitle] = React.useState(parsedLocalStorageCourse?.title)

    const onChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(event.target.value)
    }

    const onChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(Number(event.target.value))
    }

    React.useEffect(() => {
        localStorage.setItem(
            'course',
            JSON.stringify({
                ...parsedLocalStorageCourse,
                title: title,
                category_id: category
            })
        )
    }, [title, category])

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Typography variant="h3" gutterBottom>
                    Titre du cours
                </Typography>
                <Typography color="primary" variant="subtitle1" gutterBottom>
                    Essayez de trouver un titre accrocheur et évocateur.
                    <br />
                    Si vous n&apos;avez pas d&apos;inspiration, ne vous
                    inquiétez pas, vous pourrez rentrer votre titre plus tard.
                </Typography>
                <TextField
                    onChange={onChangeTitle}
                    value={title}
                    variant="outlined"
                    placeholder="Titre"
                    fullWidth
                />
            </div>
            <div className={classes.categoryContainer}>
                <Typography variant="h3" gutterBottom>
                    Catégorie du cours
                </Typography>
                <Typography color="primary" variant="subtitle1" gutterBottom>
                    La catégorie permettra aux utilisateurs de trouver votre
                    cours plus facilement.
                    <br />
                    Si vous n&apos;êtes pas sûr de la catégorie, vous pourrez la
                    modifier plus tard
                </Typography>
                <Select
                    onChange={onChangeCategory}
                    variant="outlined"
                    value={category}
                    fullWidth
                    MenuProps={{
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        },
                        transformOrigin: {
                            vertical: 'top',
                            horizontal: 'center'
                        },
                        variant: 'menu'
                    }}
                >
                    {categories.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                            {category.name}
                        </MenuItem>
                    ))}
                </Select>
            </div>
        </div>
    )
}

export default TitleAndCategoryStep
