import React from 'react'
import { render, fireEvent } from '../testUtils'
import Home from '../../pages/index'

describe('Home page', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<Home />, {})
        expect(asFragment()).toMatchSnapshot()
    })

    it('clicking button triggers alerts', () => {
        const { getByText } = render(<Home />, {})
        window.alert = jest.fn()
        fireEvent.click(getByText('Test Button'))
        expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
    })
})
