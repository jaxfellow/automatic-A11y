beforeEach(() => {
  cy.visit('http://localhost:3000')
  cy.injectAxe()
})

describe('Todo app', () => {
  it('Should be accessible', () => {
    cy.get('input.input').type('new todo item');
    cy.get('#root > div > header > form > input[type=submit]').click();
    cy.checkA11y(null, null, null, true)
  })
})