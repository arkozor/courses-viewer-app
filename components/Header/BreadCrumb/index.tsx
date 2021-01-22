import React from 'react'
import Link from 'next/link'
import { Typography, Breadcrumbs } from '@material-ui/core'

import classes from './style.module.scss'

const categories = [
    { name: 'Développement Web', href: '/category/web' },
    { name: 'Développement Logiciel', href: '/category/logiciel' },
    { name: 'Développement Mobile', href: 'category/mobile' },
    { name: 'Développement jeux vidéo', href: 'category/jeux-vidéo' }
] // TODO: when this data will be available BE side, fetch it and remove the array

const BreadCrumb = (): JSX.Element => {
    return (
        <Breadcrumbs
            aria-label="category-navigation"
            className={classes.breadcrumb}
        >
            {categories.map((category, id) => (
                <span key={id} className={classes.link}>
                    <Link href={category.href}>
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
