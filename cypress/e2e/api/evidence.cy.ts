describe('API: Evidence Resource', () => {
  const url = 'http://localhost:4000/api/evidence'
  let id: string

  beforeEach(() => {
    cy.request('POST', '/auth/signin', {
      email: 'user@email.com',
      password: 'password',
    })
  })
  it('create', () => {
    cy.fixture('test.mov', 'binary')
      .then((file) => Cypress.Blob.binaryStringToBlob(file))
      .then((blob) => {
        const formdata = new FormData()
        formdata.append('video', blob, 'test.mov')
        formdata.append('participant', 'Bob')
        formdata.append('project', '62ebe39fea4bf07f32b51f1a')

        cy.request({
          method: 'POST',
          url,
          headers: {
            'content-type': 'multipart/form-data',
          },
          body: formdata,
        })
          .its('status')
          .should('be.equal', 200)
      })
  })
  it('readAll', () => {
    cy.request({
      method: 'GET',
      url,
    }).then((response) => {
      id = response.body.data[0]._id
      expect(response.body.data[0]).has.property('participant', 'Bob')
    })
  })
  it('update', () => {
    cy.request({
      method: 'PUT',
      url: `${url}/${id}`,
      body: {
        participant: 'Glenda',
      },
    }).then((response) => {
      expect(response.body.data).has.property('participant', 'Glenda')
    })
  })
  it('readOne', () => {
    cy.request({
      method: 'GET',
      url: `${url}/${id}`,
    }).then((response) => {
      expect(response.body.data).has.property('participant', 'Glenda')
    })
  })

  it('deleteOne', () => {
    cy.request({
      method: 'DELETE',
      url: `${url}/${id}`,
    }).then((response) => {
      expect(response.body.data).has.property('participant', 'Glenda')
      expect(response.body.message).has.property('message', 'evidence deleted')
    })
  })
})
