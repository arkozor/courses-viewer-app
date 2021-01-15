import React from 'react'
import Header from 'components/Header'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props): JSX.Element => {
    const { children } = props
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Layout
