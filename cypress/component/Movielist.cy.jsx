import Movielist from '../../src/components/Movielist';
import '../../src/App.css'

describe('<Movielist>', () => {
  it('mounts', () => {
    cy.mount(<Movielist />)
  })
})