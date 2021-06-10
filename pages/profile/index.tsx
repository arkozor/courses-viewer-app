import React from 'react'

import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
// import Avatar from 'components/Avatar'
import AvatarStyling from 'components/UserProfile/AvatarStyling'
import ProfileStyling from 'components/UserProfile/ProfileStyling'
// import { UserContext } from 'context'

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
    // const currentUser = useContext(UserContext)
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
                {/* <div className={classes.avatar}>
                    {currentUser ? (
                        <Avatar
                            src={currentUser.avatarSrc}
                            nickname={currentUser.username}
                        />
                    ) : null}
                </div> */}
                <Tabs
                    //TabIndicatorProps={{ style: { background: '#6dcebb' } }}
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab
                        className={classes.tabLabel}
                        label="Avatar"
                        {...a11yProps(0)}
                    />
                    <Tab
                        className={classes.tabLabel}
                        disabled={false}
                        label="profil"
                        {...a11yProps(1)}
                    />
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
