import React from 'react'

import {
    Typography,
    MenuItem,
    Select,
    TextField,
    Divider
} from '@material-ui/core'
import { ImageDropzoneWithPreview } from 'components/DropZone'
import {
    CategoryFilter,
    DomainFilter,
    ThemeFilter
} from 'components/Filters/SearchFilters/type'

import { PostCourseArgs } from '../type'
import classes from './style.module.scss'

type Props = {
    filters?: {
        domains: DomainFilter[]
        themes: ThemeFilter[]
        categories: CategoryFilter[]
    }
}

const TitleAndCategoryStep = ({ filters }: Props): JSX.Element => {
    const localStorageCourse =
        typeof window !== 'undefined' && localStorage.getItem('course')

    const parsedLocalStorageCourse: PostCourseArgs = JSON.parse(
        localStorageCourse
    )
    const [image, setImage] = React.useState('')

    const [imageSrc, setImageSrc] = React.useState(
        parsedLocalStorageCourse?.thumbnail
    )

    const [category, setCategory] = React.useState(
        parsedLocalStorageCourse?.category_id || 1
    )
    const [theme, setTheme] = React.useState(
        parsedLocalStorageCourse?.theme_id || 1
    )

    const [domain, setDomain] = React.useState(
        parsedLocalStorageCourse?.domain_id || 1
    )

    const [title, setTitle] = React.useState(parsedLocalStorageCourse?.title)

    const [preview, setPreview] = React.useState(
        parsedLocalStorageCourse?.preview
    )

    const onChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(event.target.value)
    }
    const onChangePreview = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPreview(event.target.value)
    }

    const onChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(Number(event.target.value))
    }
    const onChangeDomain = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDomain(Number(event.target.value))
    }
    const onChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(Number(event.target.value))
    }

    const blobToBase64 = (files: Blob[]) => {
        const promise = new Promise((resolve, reject) => {
            const reader = new FileReader()

            reader.readAsDataURL(files[0])

            reader.onload = () => {
                if (reader.result) {
                    resolve(reader.result)
                } else {
                    reject(Error('Failed converting to base64'))
                }
            }
        })
        promise.then(
            (result: any) => {
                setImage(result)
            },
            (err) => {
                throw new Error(
                    `Impossible de télécharger l'image ${err.message}`
                )
            }
        )
    }

    const getImage = (image) => {
        if (image.length) {
            blobToBase64(image)
        }
    }

    React.useEffect(() => {
        localStorage.setItem(
            'course',
            JSON.stringify({
                ...parsedLocalStorageCourse,
                title: title,
                category_id: category,
                theme_id: theme,
                domain_id: domain,
                preview: preview,
                thumbnail: image || imageSrc
            })
        )
    }, [title, preview, category, theme, domain, image, imageSrc])

    return (
        <div className={classes.container}>
            <div className={classes.sectionContainer}>
                <div className={classes.section}>
                    <Typography variant="h3" gutterBottom>
                        Miniature du cours
                    </Typography>
                    <Typography
                        color="primary"
                        variant="subtitle1"
                        gutterBottom
                    >
                        La miniature fera que l&apos;utilisateur cliquera ou non
                        sur votre cours. Trouvez une image qui accroche
                        l&apos;oeil des étudiants !
                    </Typography>
                    <ImageDropzoneWithPreview
                        getFile={getImage}
                        defaultValues={image}
                    />
                    <TextField
                        className={classes.textField}
                        onChange={(e) => {
                            setImageSrc(e.target.value)
                        }}
                        defaultValue={imageSrc}
                        variant="outlined"
                        label={`Adresse de l'image`}
                    />
                </div>
            </div>
            <Divider variant="middle" />

            <div className={classes.sectionContainer}>
                <div className={classes.section}>
                    <Typography variant="h3" gutterBottom>
                        Titre du cours
                    </Typography>
                    <Typography
                        color="primary"
                        variant="subtitle1"
                        gutterBottom
                    >
                        Essayez de trouver un titre accrocheur et évocateur.
                        <br />
                        Si vous n&apos;avez pas d&apos;inspiration, ne vous
                        inquiétez pas, vous pourrez rentrer votre titre plus
                        tard.
                    </Typography>
                    <TextField
                        className={classes.textField}
                        onChange={onChangeTitle}
                        value={title}
                        variant="outlined"
                        label="Titre"
                    />
                </div>
            </div>
            <Divider variant="middle" />
            <div className={classes.sectionContainer}>
                <div className={classes.section}>
                    <Typography variant="h3" gutterBottom>
                        Preview du cours
                    </Typography>
                    <Typography
                        color="primary"
                        variant="subtitle1"
                        gutterBottom
                    >
                        Essayez d&apos;écrire une description du cours qui
                        permettra d&apos;avoir une idée précise de ce que le
                        cours peut apporter à l&apos;utilisateur.
                    </Typography>
                    <TextField
                        className={classes.textField}
                        onChange={onChangePreview}
                        value={preview}
                        variant="outlined"
                        label="Titre"
                    />
                </div>
            </div>
            <Divider variant="middle" />

            <div className={classes.sectionContainer}>
                <div className={classes.section}>
                    <Typography variant="h3" gutterBottom>
                        Catégorie du cours
                    </Typography>
                    <Typography
                        color="primary"
                        variant="subtitle1"
                        gutterBottom
                    >
                        La catégorie permettra aux utilisateurs de trouver votre
                        cours plus facilement.
                    </Typography>
                    <Select
                        className={classes.select}
                        onChange={onChangeCategory}
                        variant="outlined"
                        value={category || 1}
                        MenuProps={{
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            transformOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'menu'
                        }}
                    >
                        {filters?.categories.map((category) => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </div>
            <Divider variant="middle" />
            <div className={classes.sectionContainer}>
                <div className={classes.section}>
                    <Typography variant="h3" gutterBottom>
                        Domain
                    </Typography>
                    <Typography
                        color="primary"
                        variant="subtitle1"
                        gutterBottom
                    >
                        Le domaine permettra aux utilisateurs de connaître le
                        language utilisé pour le cours
                    </Typography>
                    <Select
                        className={classes.select}
                        onChange={onChangeDomain}
                        variant="outlined"
                        value={domain || 1}
                        MenuProps={{
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            transformOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'menu'
                        }}
                    >
                        {filters?.domains.map((domain) => (
                            <MenuItem key={domain.id} value={domain.id}>
                                {domain.name}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </div>
            <Divider variant="middle" />
            <div className={classes.sectionContainer}>
                <div className={classes.section}>
                    <Typography variant="h3" gutterBottom>
                        Theme
                    </Typography>
                    <Typography
                        color="primary"
                        variant="subtitle1"
                        gutterBottom
                    >
                        Le Theme permettra aux utilisateurs de connaître le
                        theme du cours
                        <br />
                        Si vous n&apos;êtes pas sûr du theme, vous pourrez la
                        modifier plus tard.
                    </Typography>
                    <Select
                        className={classes.select}
                        onChange={onChangeTheme}
                        variant="outlined"
                        value={theme || 1}
                        MenuProps={{
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            transformOrigin: {
                                vertical: 'top',
                                horizontal: 'center'
                            },
                            variant: 'menu'
                        }}
                    >
                        {filters?.themes.map((theme) => (
                            <MenuItem key={theme.id} value={theme.id}>
                                {theme.name}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default TitleAndCategoryStep
