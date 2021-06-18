import React from 'react'

import { MenuItem, Select } from '@material-ui/core'
import { useRouter } from 'next/router'

import { DomainFilter, CategoryFilter, ThemeFilter } from '../type'
import classes from './style.module.scss'

type Props = {
    filters: DomainFilter[] | CategoryFilter[] | ThemeFilter[]
    type: 'domain' | 'category' | 'theme'
}

const DropdownFilter = ({ filters, type }: Props): JSX.Element => {
    const router = useRouter()
    const query = router.query[type]

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === type) {
            delete router.query[type]
            router.push({
                pathname: location.pathname,
                query: {
                    ...router.query
                }
            })
        } else {
            router.push({
                pathname: location.pathname,
                query: {
                    ...router.query,
                    [type]: event.target.value
                }
            })
        }
    }

    const humanReadableTypes = () => {
        switch (type) {
            case 'domain':
                return 'Tous les langages'
            case 'category':
                return 'Toutes les categories'
            case 'theme':
                return 'Tous les themes'

            default:
                break
        }
    }

    return (
        <div className={classes.container}>
            <Select
                onChange={handleChange}
                variant="outlined"
                value={query ? query : type}
                inputProps={{
                    classes: {
                        root: classes.input
                    }
                }}
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
                {filters.map((filter) => (
                    <MenuItem key={filter.id} value={filter.name}>
                        {filter.name}
                    </MenuItem>
                ))}
                <MenuItem value={type}>{humanReadableTypes()}</MenuItem>
            </Select>
        </div>
    )
}

export default DropdownFilter
