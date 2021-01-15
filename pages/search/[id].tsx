import React from 'react'
import { useRouter } from 'next/router'

const Search = (): JSX.Element => {
    const router = useRouter()
    const { id } = router.query

    return <div>{id}</div>
}

export default Search
