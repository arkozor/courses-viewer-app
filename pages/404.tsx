import React from 'react'

import ErrorComponent from 'components/ErrorComponent'

const Error404 = (): JSX.Element => (
    <ErrorComponent errorText="La page a disparu !" errorCode="404" fullPage />
)

export default Error404
