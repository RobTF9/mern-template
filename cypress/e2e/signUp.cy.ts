describe('Sign up', () => {
  it('User can visit sign up page', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'Sign up')
  })
  it('User can sign up with email, username and password', () => {
    cy.get('input[name=email]').clear().type('b@b.com')
    cy.get('input[name=username]').clear().type('b')
    cy.get('input[name=password]').clear().type('password{enter}')
    cy.get('h1').should('contain', 'Authenticated')
  })
})
