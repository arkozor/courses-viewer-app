import React from 'react'

import { Chip, Typography } from '@material-ui/core'
import classnames from 'classnames'

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

    function select(event: React.MouseEvent<HTMLElement>) {
        const { innerText } = event.target as HTMLElement
        if (innerText != selectedChip) {
            setSelectedChip(innerText)
        } else {
            setSelectedChip('')
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
                        onClick={select}
                    />
                )
            })}
        </div>
    )
}

export default ChipFilters
