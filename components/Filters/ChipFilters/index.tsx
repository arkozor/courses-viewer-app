import React from 'react'

import { Chip, Typography } from '@material-ui/core'
import axios from 'axios'
import classnames from 'classnames'
import router from 'next/router'

import classes from './style.module.scss'

const ChipFilters = (): JSX.Element => {
    const [selectedChip, setSelectedChip] = React.useState('')
    const [chipLabel, setChipLabel] = React.useState([])

    React.useEffect(() => {
        try {
            axios
                .get(`${process.env.DOMAIN_API}`, {
                    timeout: 6000
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
            {chipLabel
                .reverse()
                .slice(0, 4)
                .map((chip) => {
                    return (
                        <Chip
                            key={chip.id}
                            classes={{
                                root: classnames(
                                    classes[chip.name],
                                    classes.chip,
                                    selectedChip === chip.name
                                        ? `${classes[chip.name]}-outlined`
                                        : ''
                                ),
                                outlined: chip.name
                            }}
                            label={
                                <Typography variant="h5">
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
