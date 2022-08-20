import Movielist from '../../src/components/Movielist';
import '../../src/App.css'

describe('<Movielist>', () => {
  beforeEach(() => {
    cy.mount(<Movielist />);
    cy.get('[data-cy=empty]').contains('No movies here');
    const formInput = cy.get('form input');
    formInput.should('have.value', '');
    formInput.type('Monster Inc.')
      .should('have.value', 'Monster Inc.')
    cy.get('form button').click();
    formInput.clear()
    formInput.type('Circle of eight')
      .should('have.value', 'Circle of eight');
    cy.get('form button').click();
    cy.get('[data-cy=movie-list]').children().should('have.length', 2);
  });
  // it('Mounts a component and write', () => {
  //   cy.get('[data-cy=empty]').contains('No movies here');
  //   cy.get('form input').should('have.value', '');

  // })
  it('The Listof movies appends', () => {
    cy.get('form input')
      .type('Monster Inc.')
      .should('have.value', 'Monster Inc.')
    cy.get('form button').click();
    cy.get('[data-cy=movie-list]').children().should('have.length', 3);
  })

  it('uncheck movie', () => {
    const lastListitem = cy.get('[data-cy=movie-list]:nth-child(1) li:last-child');
    lastListitem.click();
    lastListitem.should('have.class', 'strike');
    cy.get('[data-cy=clear-movie]').click();
    cy.get('[data-cy=movie-list]').children().should('have.length', 1);
    cy.get('[data-cy=clear-movie]').click();
    cy.get('[data-cy=movie-list]').children().should('have.length', 1);
  })
})