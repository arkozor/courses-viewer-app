import React from 'react'

import axios from 'axios'
import Layout from 'components/Layout'
import { UserContext } from 'context'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import './style.scss'
import { ErrorBoundary } from 'react-error-boundary'
import { User } from 'types/types'

const CoursesViewerApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    const [currentUser, setCurrentUser] = React.useState<User>(null)

    function ErrorFallback({ error, resetErrorBoundary }) {
        return (
            <div role="alert">
                <p>Something went wrong:</p>
                <pre>{error.message}</pre>
                <button onClick={resetErrorBoundary}>Try again</button>
            </div>
        )
    }

    React.useEffect(() => {
        const localStorageUser = localStorage.getItem('user')
        const parsedLocalStorageUser: User = JSON.parse(localStorageUser)

        const syncCurrentUserWithLocalStorage = () => {
            setCurrentUser(parsedLocalStorageUser)
        }

        window.addEventListener('storage', syncCurrentUserWithLocalStorage)

        if (localStorageUser && currentUser === null) {
            syncCurrentUserWithLocalStorage()
        }

        return () =>
            window.removeEventListener(
                'storage',
                syncCurrentUserWithLocalStorage
            )
    })

    React.useEffect(() => {
        if (currentUser?.token) {
            try {
                axios
                    .get(`${process.env.USER_API}/courses/publisher`, {
                        headers: {
                            Authorization: `Bearer ${currentUser.token}`
                        },
                        timeout: 60000
                    })
                    .then((res) => {
                        const isAdmin = res.data.data
                        setCurrentUser({ ...currentUser, isAdmin })
                    })
            } catch (e) {
                throw new Error('Le serveur ne répond pas')
            }
        }
    }, [currentUser?.token])

    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/Roboto/Roboto-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <title>Courses Viewer App</title>
                <link
                    rel="preload"
                    href="/fonts/Roboto/Roboto-Medium.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <UserContext.Provider value={currentUser}>
                <Layout>
                    <ErrorBoundary
                        FallbackComponent={ErrorFallback}
                        onReset={() => {
                            // reset the state of your app so the error doesn't happen again
                        }}
                    >
                        <Component {...pageProps} />
                    </ErrorBoundary>
                </Layout>
            </UserContext.Provider>
        </>
    )
}

export default CoursesViewerApp
