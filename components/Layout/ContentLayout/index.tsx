import React from 'react'

import classes from './style.module.scss'

type Props = {
    children: React.ReactNode
}
const ContentLayout = (props: Props): JSX.Element => {
    const { children } = props
    return <div className={classes.container}>{children}</div>
}

export default ContentLayout
