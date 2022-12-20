describe('API: Observation Resource', () => {
  const url = 'http://localhost:4000/api/observation'
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
        evidence: '62ebe39fea4bf07f32b51f1d',
        content: 'This is the observation',
      },
    }).then((response) => {
      id = response.body.data._id
      expect(response.body.data).has.property(
        'content',
        'This is the observation'
      )
    })
  })
  it('update', () => {
    cy.request({
      method: 'PUT',
      url: `${url}/${id}`,
      body: {
        content: 'This is the NEW observation',
      },
    }).then((response) => {
      expect(response.body.data).has.property(
        'content',
        'This is the NEW observation'
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
        'This is the NEW observation'
      )
    })
  })
  it('readAll', () => {
    cy.request({
      method: 'GET',
      url,
    }).then((response) => {
      expect(response.body.data[0]).has.property(
        'content',
        'This is the NEW observation'
      )
    })
  })
  it('deleteOne', () => {
    cy.request({
      method: 'DELETE',
      url: `${url}/${id}`,
    }).then((response) => {
      expect(response.body.data).has.property(
        'content',
        'This is the NEW observation'
      )
      expect(response.body.message).has.property(
        'message',
        'observation deleted'
      )
    })
  })
})
