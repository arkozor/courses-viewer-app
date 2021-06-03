import React from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
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

    const theme = createMuiTheme({
        palette: {
            primary: {
                light: '#8fe0d0',
                main: '#6dcebb',
                dark: '#789cd1'
            },
            secondary: {
                light: '#ffe8c1',
                main: '#ffd387',
                dark: '#fdc057',
                contrastText: '#000'
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <Header />
                <MessageBanner message={message} />
                <div className={classes.childrenContainer}>{children}</div>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default Layout
