import * as React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import SearchBar from '.'

describe('SearchBar', () => {
    it('Should allow user to write on the search input', () => {
        render(<SearchBar />)

        const input = screen.getByPlaceholderText('Chercher un cours')

        fireEvent.change(input, { target: { value: 'jeux vidéo' } })

        //@ts-expect-error input.value exists ...
        expect(input.value).toBe('jeux vidéo')
    })

    it('Should clear text if user clicks on the clear button', () => {
        render(<SearchBar />)

        const input = screen.getByPlaceholderText('Chercher un cours')

        fireEvent.change(input, { target: { value: 'jeudzqdsdzx vidédzqdqo' } })

        const clearButton = screen.getByLabelText('clear-button')
        fireEvent.click(clearButton)

        //@ts-expect-error input.value exists ...
        expect(input.value).toBe('')
    })
})
