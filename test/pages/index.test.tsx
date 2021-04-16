import { render } from '../testUtils'
import HomePage from '../../pages'

describe('CoursesViewerApp page', () => {
    it.skip('matches snapshot', () => {
        const { asFragment } = render(<HomePage />, {})
        expect(asFragment()).toMatchSnapshot()
    })
})
