import React from 'react'
import Header from 'components/Header'
import ContentLayout from './ContentLayout'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props): JSX.Element => {
    const { children } = props
    return (
        <div>
            <Header />
            <ContentLayout>{children}</ContentLayout>
        </div>
    )
}

export default Layout
