import React from 'react'

import { Avatar } from '@material-ui/core'

const AvatarSelector = (): JSX.Element => {
    return (
        <div>
            <Avatar
                alt="men"
                src="\public\images\avatars\avatar-men-1.svg"
            ></Avatar>
            <Avatar
                alt="men"
                src="\public\images\avatars\avatar-men-2.svg"
            ></Avatar>
            <Avatar
                alt="men"
                src="\public\images\avatars\avatar-men-3.svg"
            ></Avatar>
            <Avatar
                alt="women"
                src="\public\images\avatars\avatar-women-1.svg"
            ></Avatar>
            <Avatar
                alt="women"
                src="\public\images\avatars\avatar-women-2.svg"
            ></Avatar>
            <Avatar
                alt="women"
                src="\public\images\avatars\avatar-womn-3.svg"
            ></Avatar>
        </div>
    )
}

export default AvatarSelector
