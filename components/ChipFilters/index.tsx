import React from 'react'
import { Chip } from '@material-ui/core'
import classes from './style.module.scss'
import classnames from 'classnames'

const ChipFilters = (): JSX.Element => {
    const [isSelected, setIsSelected] = React.useState('')
    const chips = [
        { className: classes.cSharpChip, label: 'CSharp' },
        { className: classes.javaChip, label: 'Java' },
        { className: classes.jsChip, label: 'JavaScript' },
        { className: classes.phpChip, label: 'Php' }
    ]

    function resolveClick(event: React.MouseEvent<HTMLElement>) {
        const { innerText } = event.target as HTMLElement
        setIsSelected(innerText)
    }

    return (
        <div>
            {chips.map((chip) => (
                <Chip
                    key={chip.label}
                    classes={{
                        root: classnames(
                            chip.className,
                            classes.chip,
                            classes.selected && isSelected === chip.label
                                ? classes.selected
                                : ''
                        )
                    }}
                    label={chip.label}
                    clickable
                    onClick={resolveClick}
                />
            ))}
        </div>
    )
}

export default ChipFilters
