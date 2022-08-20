import Movielist from '../../src/components/Movielist';
import '../../src/App.css'

describe('<Movielist>', () => {
  beforeEach(() => {
    cy.mount(<Movielist />);
  });
  it('Mounts a component and write', () => {
    cy.get('[data-cy=empty]').contains('No movies here');
    cy.get('form input').should('have.value', '');

  })
  it('The Listof movies appends', () => {
    cy.get('form input')
      .type('Snowden')
      .should('have.value', 'Snowden')
    cy.get('form button').click();
    cy.get('[data-cy=movie-list]').children().should('have.length', 1);
    cy.get('form input')
      .type('Monster Inc.')
      .should('have.value', 'Monster Inc.')
    cy.get('form button').click();
    cy.get('[data-cy=movie-list]').children().should('have.length', 2);
  })
  it('uncheck movie', () => {
    cy.get('form input')
      .type('The Machinist')
      .should('have.value', 'The Machinist')
    cy.get('form button').click();
    cy.get('[data-cy=movie-list]').children().should('have.length', 1);
    cy.get('form input')
      .type('Circle of eight')
      .should('have.value', 'Circle of eight')
    cy.get('form button').click();
    cy.get('[data-cy=movie-list]').children().should('have.length', 2);
  })
})