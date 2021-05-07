import React from 'react'

import { Typography, Breadcrumbs } from '@material-ui/core'
import Link from 'next/link'

import classes from './style.module.scss'

const categories = [
    { name: 'Développement Web', href: '/categorie/web' },
    { name: 'Développement Logiciel', href: '/categorie/logiciel' },
    { name: 'Développement Mobile', href: '/categorie/mobile' },
    { name: 'Développement jeux vidéo', href: '/categorie/jeux-vidéo' }
] // TODO: when this data will be available BE side, fetch it and remove the array

const BreadCrumb = (): JSX.Element => {
    return (
        <Breadcrumbs
            separator="|"
            aria-label="category-navigation"
            className={classes.breadcrumb}
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
