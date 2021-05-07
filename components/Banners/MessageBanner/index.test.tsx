import * as React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import MessageBanner from '.'

describe('MessageBanner', () => {
    beforeEach(() => {
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('')
        jest.spyOn(Storage.prototype, 'setItem').mockReturnValue()
    })
    const message = { value: 'Welcome', id: 'messageId' }

    it('Should render the message if it has not been dismissed', () => {
        render(<MessageBanner message={message} />)

        screen.getByText('Welcome')
    })
    it('Should update the local storage when the message is dismissed', () => {
        const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')
        render(<MessageBanner message={message} />)

        const closeButton = screen.getByLabelText('close-button')

        fireEvent.click(closeButton)

        expect(setItemSpy).toHaveBeenCalledWith('messageId', 'dismissed')
    })
    it('Should not show the message when already dismissed', () => {
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('dismissed')
        render(<MessageBanner message={message} />)

        expect(screen.queryByText('Welcome')).not.toBeInTheDocument()
    })
})
