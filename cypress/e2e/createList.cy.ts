describe('Create a list', () => {
  beforeEach(() => {
    cy.request('POST', '/auth/signin', {
      email: 'r@r.com',
      password: 'password',
    })
  })

  it('User can views lists', () => {
    cy.visit('/')
    cy.get('h3').should('contain', 'List 1')
  })

  it('User can create a new List', () => {
    cy.get('input[name=list]').type('List 3{enter}')
    cy.get('h3').should('contain', 'List 3')
  })
})
