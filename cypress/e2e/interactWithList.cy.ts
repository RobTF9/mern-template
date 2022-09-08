describe('List interactions', () => {
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

  it('User can create and open a new List', () => {
    cy.get('input[name=list]').type('List 3{enter}')
    cy.get('h3').should('contain', 'List 3')
    cy.get('a').contains('Open List 3').click()
    cy.get('h2').should('contain', 'List 3')
  })

  it('User can add a new item to list', () => {
    cy.get('input').type('New item{enter}')
    cy.get('li>form>input').should('have.value', 'New item')
  })

  it('User can update an item in list', () => {
    cy.get('li>form>input').clear().type('Updated{enter}')
    cy.get('li>form>input').should('have.value', 'Updated')
  })
})
