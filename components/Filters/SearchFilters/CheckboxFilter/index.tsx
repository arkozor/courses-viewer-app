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
                    ...router.query,
                    domain: event.target.value
                }
            })
        }
    }

    return (
        <div className={classes.container}>
            {filters.map((filter) => (
                <FormControlLabel
                    key={filter.name}
                    control={
                        <Checkbox
                            checked={domain === filter.name}
                            onChange={handleChange}
                            value={filter.name}
                        />
                    }
                    label={filter.name}
                />
            ))}
        </div>
    )
}

export default CheckboxFilter
