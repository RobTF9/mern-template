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
  // it('update', () => {
  //   cy.request({
  //     method: 'PUT',
  //     url: `${url}/${id}`,
  //     body: {
  //       content: 'This is the NEW project description',
  //     },
  //   }).then((response) => {
  //     expect(response.body.data).has.property(
  //       'content',
  //       'This is the NEW project description'
  //     )
  //   })
  // })
  // it('readOne', () => {
  //   cy.request({
  //     method: 'GET',
  //     url: `${url}/${id}`,
  //   }).then((response) => {
  //     expect(response.body.data).has.property(
  //       'content',
  //       'This is the NEW project description'
  //     )
  //   })
  // })
  // it('readAll', () => {
  //   cy.request({
  //     method: 'GET',
  //     url,
  //   }).then((response) => {
  //     expect(response.body.data[0]).has.property(
  //       'content',
  //       'This is the NEW project description'
  //     )
  //   })
  // })
  // it('deleteOne', () => {
  //   cy.request({
  //     method: 'DELETE',
  //     url: `${url}/${id}`,
  //   }).then((response) => {
  //     expect(response.body.data).has.property('title', 'Project')
  //     expect(response.body.message).has.property('message', 'project deleted')
  //   })
  // })
})
