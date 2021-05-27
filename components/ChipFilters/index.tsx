import React from 'react'

import { Chip, Typography } from '@material-ui/core'
import classnames from 'classnames'
import router from 'next/router'

import classes from './style.module.scss'

const ChipFilters = (): JSX.Element => {
    const [selectedChip, setSelectedChip] = React.useState('')
    const chips = [
        {
            className: classes.cSharpChip,
            label: 'CSharp',
            isSelected: classes.cSharpChipSelected
        },
        {
            className: classes.javaChip,
            label: 'Java',
            isSelected: classes.javaChipSelected
        },
        {
            className: classes.jsChip,
            label: 'JavaScript',
            isSelected: classes.jsChipSelected
        },
        {
            className: classes.phpChip,
            label: 'Php',
            isSelected: classes.phpChipSelected
        }
    ]

    function select(event: React.MouseEvent<HTMLElement>, value) {
        const { innerText } = event.target as HTMLElement
        if (innerText != selectedChip) {
            setSelectedChip(innerText)
            router.push(
                {
                    query: { domain: value }
                },
                location.pathname,
                { shallow: true }
            )
        } else {
            setSelectedChip('')
            router.push(
                {
                    query: {}
                },
                location.pathname,
                { shallow: true }
            )
        }
    }

    return (
        <div>
            {chips.map((chip) => {
                return (
                    <Chip
                        key={chip.label}
                        classes={{
                            root: classnames(
                                chip.className,
                                classes.chip,
                                selectedChip === chip.label
                                    ? chip.isSelected
                                    : ''
                            ),
                            outlined: chip.className
                        }}
                        label={
                            <Typography variant="h5">{chip.label}</Typography>
                        }
                        variant="outlined"
                        clickable
                        onClick={(event) => {
                            select(event, chip.label)
                        }}
                    />
                )
            })}
        </div>
    )
}

export default ChipFilters
