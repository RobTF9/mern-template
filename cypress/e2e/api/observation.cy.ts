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
  it('readAll', () => {
    cy.request({
      method: 'GET',
      url,
    }).then((response) => {
      expect(response.body.data[0]).has.property(
        'content',
        "One of my most afraid of being a parent? Is probably that my children will be unhappy. That they'll grow up in this kind of crazy world that we have around us will continue to get crazier and crazier. It means that there's very limited opportunity for them to find who they are and to be who they are and to live the type of life that they want to live, but is probably a stupid fear and that the live whatever life they want to live. Whether I agree with it or not. I just want them to have opportunity at my my greatest fear is that they won't have opportunity."
      )
    })
  })
})
