describe('API: Assumption Resource', () => {
  const url = 'http://localhost:4000/api/assumption'
  let id: string

  beforeEach(() => {
    cy.request('POST', '/auth/signin', {
      email: 'user@email.com',
      password: 'password',
    })
  })
  it('create', () => {
    cy.request({
      method: 'POST',
      url,
      body: {
        supporting: '62ebe39fea4bf07f32b51f1e',
        content: 'This is the assumption',
      },
    }).then((response) => {
      id = response.body.data._id
      expect(response.body.data).has.property(
        'content',
        'This is the assumption'
      )
    })
  })
  it('update', () => {
    cy.request({
      method: 'PUT',
      url: `${url}/${id}`,
      body: {
        content: 'This is the NEW assumption',
      },
    }).then((response) => {
      expect(response.body.data).has.property(
        'content',
        'This is the NEW assumption'
      )
    })
  })
  it('readOne', () => {
    cy.request({
      method: 'GET',
      url: `${url}/${id}`,
    }).then((response) => {
      expect(response.body.data).has.property(
        'content',
        'This is the NEW assumption'
      )
    })
  })
  it('readAll', () => {
    cy.request({
      method: 'GET',
      url,
    }).then((response) => {
      expect('62ebe39fea4bf07f32b51f1e').to.be.oneOf(
        response.body.data[0].supporting
      )
    })
  })
  it('deleteOne', () => {
    cy.request({
      method: 'DELETE',
      url: `${url}/${id}`,
    }).then((response) => {
      expect('62ebe39fea4bf07f32b51f1e').to.be.oneOf(
        response.body.data.supporting
      )
      expect(response.body.message).has.property(
        'message',
        'assumption deleted'
      )
    })
  })
})
