import React from 'react'

import { MenuItem, Select } from '@material-ui/core'
import { useRouter } from 'next/router'

import { DomainFilter } from '../type'
import classes from './style.module.scss'

type Props = {
    filters: DomainFilter[]
}

const DropdownFilter = ({ filters }: Props): JSX.Element => {
    const router = useRouter()
    const { domain } = router.query

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            router.push({
                pathname: location.pathname
            })
        } else {
            router.push({
                pathname: location.pathname,
                query: {
                    domain: event.target.value
                }
            })
        }
    }

    return (
        <div className={classes.container}>
            <Select
                onChange={handleChange}
                variant="outlined"
                defaultValue={domain ? domain : ''}
                value={domain ? domain : ''}
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
                <MenuItem value="">Tous</MenuItem>
            </Select>
        </div>
    )
}

export default DropdownFilter
