import React from 'react'

import { Typography, Breadcrumbs } from '@material-ui/core'
import Link from 'next/link'

import classes from './style.module.scss'

const categories = [
    { name: 'Développement Web', href: '/search?category=WEB' },
    { name: 'Développement Logiciel', href: '/search?category=LOGICIEL' },
    { name: 'Développement Mobile', href: '/search?category=MOBILE' },
    { name: 'Développement jeux vidéo', href: '/search?category=JEUX VIDEO' }
] // TODO: when this data will be available BE side, fetch it and remove the array

const BreadCrumb = (): JSX.Element => {
    return (
        <Breadcrumbs
            separator="|"
            aria-label="category-navigation"
            classes={{
                root: classes.breadcrumb,
                li: classes.item,
                ol: classes.itemsContainer
            }}
        >
            {categories.map((category, id) => (
                <span key={id} className={classes.link}>
                    <Link key={id} href={category.href}>
                        <Typography color="textPrimary">
                            {category.name}
                        </Typography>
                    </Link>
                </span>
            ))}
        </Breadcrumbs>
    )
}

export default BreadCrumb
