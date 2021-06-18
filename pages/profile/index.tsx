import React from 'react'

import { Box, Tab, Tabs } from '@material-ui/core'
import AvatarStyling from 'components/UserProfile/AvatarStyling'
import ProfileStyling from 'components/UserProfile/ProfileStyling'

import classes from './style.module.scss'

interface TabPanelProps {
    children?: React.ReactNode
    index: any
    value: any
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
        >
            {value === index ? (
                <Box component="div">
                    <div>{children}</div>
                </Box>
            ) : null}
        </div>
    )
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
                    value={value}
                    onChange={handleChange}
                    className={classes.tabs}
                >
                    <Tab className={classes.tabLabel} label="Avatar" />
                    <Tab className={classes.tabLabel} label="Profile" />
                </Tabs>
            </div>
            <div className={classes.content}>
                <TabPanel value={value} index={0}>
                    <AvatarStyling />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ProfileStyling />
                </TabPanel>
            </div>
        </div>
    )
}

export default Profile
