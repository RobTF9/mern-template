describe('First user can interact with list...', () => {
  beforeEach(() => {
    cy.request('POST', '/auth/signin', {
      email: 'r@r.com',
      password: 'password',
    })
  })

  it('First user can views lists', () => {
    cy.visit('/')
    cy.get('h3').should('contain', 'List 1')
    cy.get('a').contains('Open List 1').click()
    cy.get('h2').should('contain', 'List 1')
  })

  it('First user can create a new item', () => {
    cy.get('input[name=item]').clear().type('Hello m{enter}')
    cy.get('input').should('have.value', 'Hello m')
  })

  it('First user can see other item', () => {
    cy.get('input[name="Hello r"]').should('have.value', 'Hello r')
  })

  it('First user can edit seconds item', () => {
    cy.get('input[name="Hello r"]').type('focus{enter}')
  })

  it('First user can see second online', () => {
    cy.get('span').should('contain', 'm')
  })
})
