import { observations } from '../../fixtures/data.json'

describe('RECALL: Related entity detection', () => {
  const url = 'http://localhost:4000/api/'
  let id: string

  beforeEach(() => {
    cy.request('POST', '/auth/signin', {
      email: 'user@email.com',
      password: 'password',
    })
  })

  it('Can detect entities in a new observation', () => {
    cy.request({
      method: 'POST',
      url: url + 'observation',
      body: {
        ...observations[0],
      },
    }).then((response) => {
      id = response.body.data._id

      expect(response.body.data).has.property(
        'content',
        observations[0].content
      )
      expect(response.body.related.detected).to.deep.eq([
        'favorite Parts',
        'parent',
        'common concept',
        'feeling purpose',
        'things',
        'favorite part',
        'concept',
        'relationship',
        'people',
        'rest',
        'life',
        'idea',
        'software',
        'individuals',
        'certain things',
        'other things',
        'wild responsibility',
      ])

      expect(response.body.related.observations).to.deep.eq([
        '63bb05073692ffa273fda236',
      ])

      expect(response.body.related.projects).to.deep.eq([
        '63b947da68e5d809ddc89a06',
      ])
    })
  })

  it('Has updated the existing related record', () => {
    cy.request({
      method: 'GET',
      url: url + `observation/63bb05073692ffa273fda236`,
      body: {
        ...observations[0],
      },
    }).then((response) => {
      expect(response.body.related.observations).to.deep.eq([id])
    })
  })

  // TODO create new observation

  // TODO should recall and update existing two
})
