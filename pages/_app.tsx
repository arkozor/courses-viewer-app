import React from 'react'

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

    return (
        <UserContext.Provider value={currentUser}>
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
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// CoursesViewerApp.getInitialProps = async (appContext: AppContext) => {
//     // calls page's `getInitialProps` and fills `appProps.pageProps`
//     const appProps = await App.getInitialProps(appContext)

//     return { ...appProps }
// }

export default CoursesViewerApp
