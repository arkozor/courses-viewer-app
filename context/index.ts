import React from 'react'

import { CourseEditor, User } from 'types/types'

export const UserContext = React.createContext<User>(null)

export const CourseEditorContext = React.createContext<CourseEditor>(null)

