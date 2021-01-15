import React from 'react'
import { render } from '../testUtils'
import HomePage from '../../pages'

describe('CoursesViewerApp page', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<HomePage />, {})
        expect(asFragment()).toMatchSnapshot()
    })

    // it('clicking button triggers alerts', () => {
    //     const { getByText } = render(<HomePage />, {})
    //     window.alert = jest.fn()
    //     fireEvent.click(getByText('Test Button'))
    //     expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
    // })
})
