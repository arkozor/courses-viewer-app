import React from 'react'

import { Checkbox, FormControlLabel } from '@material-ui/core'
import { useRouter } from 'next/router'

import { DomainFilter } from '../type'
import classes from './style.module.scss'

type Props = {
    filters: DomainFilter[]
}

const CheckboxFilter = ({ filters }: Props): JSX.Element => {
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (router.query.domain?.includes(e.target.value)) {
            router.push(location.pathname)
        } else {
            router.push({
                query: {
                    ...router.query,
                    domain: e.target.value
                }
            })
        }
    }

    return (
        <div className={classes.container}>
            {filters.map((filter) => (
                <FormControlLabel
                    key={filter.value}
                    control={
                        <Checkbox
                            checked={router.query?.domain.includes(
                                filter.value.toString()
                            )}
                            onChange={handleChange}
                            value={filter.value.toString()}
                        />
                    }
                    label={filter.label}
                />
            ))}
        </div>
    )
}

export default CheckboxFilter
