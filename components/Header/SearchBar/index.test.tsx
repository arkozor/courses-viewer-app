import { fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'

import SearchBar from '.'

describe('toto', () => {
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
    it('Should change the location when the user clicks on the search Button after entering a query', () => {
        render(<SearchBar />)

        const input = screen.getByPlaceholderText('Chercher un cours')
        const searchButton = screen.getByLabelText('search-button')

        fireEvent.change(input, { target: { value: 'Mobile' } })
        fireEvent.click(searchButton)
    })
})
