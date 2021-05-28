import React from 'react'

import { MenuItem, Select } from '@material-ui/core'
import { useRouter } from 'next/router'

import { DomainFilter } from '../type'
import classes from './style.module.scss'

type Props = {
    filters: DomainFilter[]
    type: 'domain'
}

const DropdownFilter = ({ filters, type }: Props): JSX.Element => {
    const router = useRouter()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === 'all') {
            router.push(location.pathname)
        } else {
            router.push({
                query: {
                    ...router.query,
                    [type]: event.target.value
                }
            })
        }
    }

    return (
        <div className={classes.container}>
            <Select
                onChange={handleChange}
                classes={{ root: classes.select }}
                variant="outlined"
                defaultValue={
                    router.query?.domain ? router.query?.domain : 'all'
                }
                value={router.query?.domain ? router.query?.domain : 'all'}
                inputProps={{
                    classes: {
                        root: classes.input
                    }
                }}
            >
                {filters.map((filter) => (
                    <MenuItem key={filter.value} value={filter.value}>
                        {filter.label}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}

export default DropdownFilter
