describe('Second user can interact with list...', () => {
  beforeEach(() => {
    cy.request('POST', '/auth/signin', {
      email: 'm@m.com',
      password: 'password',
    })
  })

  it('User can views lists', () => {
    cy.visit('/')
    cy.get('h3').should('contain', 'List 1')
    cy.get('a').contains('Open List 1').click()
    cy.get('h2').should('contain', 'List 1')
  })

  it('User can create a new item', () => {
    cy.get('input[name=item]').clear().type('Hello r{enter}')
    cy.get('input').should('have.value', 'Hello r')
  })
})
