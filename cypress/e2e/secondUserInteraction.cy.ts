describe('Second user can interact with list...', () => {
  beforeEach(() => {
    cy.request('POST', '/auth/signin', {
      email: 'm@m.com',
      password: 'password',
    })
  })

  it('Second user can views lists', () => {
    cy.visit('/')
    cy.get('h3').should('contain', 'List 1')
    cy.get('a').contains('Open List 1').click()
    cy.get('h2').should('contain', 'List 1')
  })

  it('Second user can create a new item', () => {
    cy.get('input[name=item]').clear().type('Hello r{enter}')
    cy.get('input').should('have.value', 'Hello r')
  })

  it('Second user can see other item', () => {
    cy.get('input[name="Hello m"]').should('have.value', 'Hello m')
  })

  it('Second user can see first user in input', () => {
    cy.get('input[name="Hello r"]').should('be.disabled')
    cy.get('input[name="Hello rfocus"]').should('have.value', 'Hello rfocus')
  })

  it('Second user can see first online', () => {
    cy.get('span').should('contain', 'm')
  })
})
