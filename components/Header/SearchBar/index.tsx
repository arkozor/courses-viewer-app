import React from 'react'

import { Button, InputAdornment, IconButton, Input } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import SearchIcon from '@material-ui/icons/Search'
import { useRouter } from 'next/router'

import classes from './style.module.scss'

const SearchBar = (): JSX.Element => {
    const router = useRouter()
    const [searchValue, setSearchValue] = React.useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const sendSearchRequest = () => {
        if (searchValue !== '') {
            router.replace(`/search/${searchValue}`)
        } else {
            router.replace('/search')
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
                aria-label="search-button"
            >
                <SearchIcon className={classes.searchIcon} />
            </Button>
            <Input
                aria-label="search-input"
                classes={{
                    root: classes.textFieldInput,
                    focused: classes.focused
                }}
                disableUnderline
                endAdornment={
                    searchValue && (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="clear-button"
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
