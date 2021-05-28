import React from 'react'

import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import Avatar from 'components/Avatar'
import AvatarSelector from 'components/Avatar/AvatarSelector'

import classes from './style.module.scss'

interface TabPanelProps {
    children?: React.ReactNode
    index: any
    value: any
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    }
}

const Profile = (): JSX.Element => {
    const [value, setValue] = React.useState(0)

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        newValue: number
    ) => {
        setValue(newValue)
    }

    return (
        <div className={classes.root}>
            <div className={classes.nav}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Avatar withNickname nickname="Invité" />

                    <Tab label="Profile" {...a11yProps(1)} />
                    <Tab label="Avatar" {...a11yProps(2)} />
                </Tabs>
            </div>
            <div className={classes.content}>
                <TabPanel value={value} index={1}>
                    profil
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className={classes.title}>
                        <Typography variant="h4">Avatar actuel :</Typography>
                    </div>
                    <div className={classes.currentAvatar}>
                        <Avatar nickname="Invité" />
                    </div>
                    <AvatarSelector />
                </TabPanel>
            </div>
        </div>
    )
}

export default Profile
