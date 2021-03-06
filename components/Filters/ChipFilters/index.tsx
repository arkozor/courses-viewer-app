import React from 'react'

import { Chip, Typography } from '@material-ui/core'
import axios from 'axios'
import classnames from 'classnames'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

const ChipFilters = ({ type }: { type: string }): JSX.Element => {
    const router = useRouter()

    const [selectedChip, setSelectedChip] = React.useState('')
    const [chipLabel, setChipLabel] = React.useState([])

    React.useEffect(() => {
        try {
            axios
                .get(`${process.env.DOMAIN_API}`, {
                    timeout: 60000
                })
                .then((res) => {
                    setChipLabel(res.data.data.data)
                })
        } catch (e) {
            throw new Error('Récupération des labels impossible')
        }
    }, [])

    function select(event: React.MouseEvent<HTMLElement>, value) {
        const { innerText } = event.target as HTMLElement
        if (innerText != selectedChip) {
            setSelectedChip(innerText)
            router.push(
                {
                    query: {
                        ...router.query,
                        [type]: value
                    }
                },
                router.pathname,
                { shallow: true }
            )
        } else {
            setSelectedChip('')
            delete router.query[type]
            router.push(
                {
                    query: {
                        ...router.query
                    }
                },
                router.pathname,
                { shallow: true }
            )
        }
    }
    return (
        <div>
            {chipLabel.map((chip) => {
                return (
                    <Chip
                        key={chip.id}
                        classes={{
                            root: classnames(
                                classes.chip,
                                router.query[type] === String(chip.id)
                                    ? classes.selected
                                    : ''
                            )
                        }}
                        label={
                            <Typography
                                color="inherit"
                                variant="body1"
                                className={
                                    router.query[type] === String(chip.id)
                                        ? classes.selectedChipName
                                        : classes.chipName
                                }
                            >
                                {chip.name}
                            </Typography>
                        }
                        variant="outlined"
                        clickable
                        onClick={(event) => {
                            select(event, chip.id)
                        }}
                    />
                )
            })}
        </div>
    )
}

export default ChipFilters
