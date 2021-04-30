import React from 'react'

import Layout from 'components/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import './style.scss'
import ErrorBoundary from 'components/ErrorComponent/ErrorBoundary'
import ErrorComponent from 'components/ErrorComponent'

const CoursesViewerApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <ErrorBoundary
            fallbackRender={({ error }) => (
                <ErrorComponent
                    errorNum={error.code}
                    errorText={error.message}
                />
            )}
        >
            <Layout>
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
                <Component {...pageProps} />
            </Layout>
        </ErrorBoundary>
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
