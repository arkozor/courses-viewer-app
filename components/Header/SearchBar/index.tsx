import React from 'react'
import {
    OutlinedInput,
    Button,
    InputAdornment,
    IconButton
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/search'
import CloseIcon from '@material-ui/icons/close'

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
        <div className={classes.searchBarContainer}>
            <Button
                size="large"
                onClick={sendSearchRequest}
                classes={{
                    root: classes.searchButton
                }}
            >
                <SearchIcon className={classes.searchIcon} />
            </Button>
            <OutlinedInput
                classes={{
                    root: classes.textFieldInput,
                    notchedOutline: classes.notch,
                    focused: classes.focused
                }}
                endAdornment={
                    searchValue && (
                        <InputAdornment position="end">
                            <IconButton
                                classes={{ root: classes.iconButton }}
                                onClick={() => setSearchValue('')}
                            >
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        sendSearchRequest()
                    }
                }}
                onChange={handleChange}
                id="search"
                placeholder="Chercher un cours"
                value={searchValue}
            />
        </div>
    )
}

export default SearchBar