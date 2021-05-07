import React from 'react'

import MessageBanner from 'components/Banners/MessageBanner'
import Footer from 'components/Footer'
import Header from 'components/Header'

import classes from './style.module.scss'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props): JSX.Element => {
    const { children } = props

    const message = {
        value: 'Bienvenue sur la première version de la visionneuse de cours !',
        id: 'welcome-message'
    }

    return (
        <div className={classes.container}>
            <Header />
            <MessageBanner message={message} />
            <div className={classes.childrenContainer}>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
