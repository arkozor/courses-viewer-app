import React from 'react'
import { TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { IconButton } from '@material-ui/core'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

const SearchBar = (): JSX.Element => {
    const router = useRouter()

    const [searchValue, setSearchValue] = React.useState('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value)
    }

    function sendSearchRequest() {
        if (searchValue) {
            const param = 'ok'
            router.push(
                {
                    pathname: `/search/[id]`,
                    query: {
                        searchValue,
                        param
                    }
                },
                `/search/${searchValue}`,
                { shallow: true }
            )
        }
    }

    return (
        <TextField
            InputProps={{
                startAdornment: (
                    <IconButton
                        size="small"
                        className={classes.searchButton}
                        onClick={sendSearchRequest}
                    >
                        <SearchIcon />
                    </IconButton>
                )
            }}
            classes={{
                root: classes.textField
            }}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    sendSearchRequest()
                }
            }}
            onChange={handleChange}
            id="input-with-icon-grid"
            placeholder="Chercher un cours"
            variant="outlined"
        />
    )
}

export default SearchBar
