import React from 'react'

import ErrorComponent from 'components/ErrorComponent'

const Error500 = (): JSX.Element => (
    <ErrorComponent
        errorText="Le serveur rencontre des difficultés !"
        errorCode="500"
        fullPage
    />
)

export default Error500
