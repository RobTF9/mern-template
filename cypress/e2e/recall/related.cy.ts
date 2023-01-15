import { observations } from '../../fixtures/data.json'

describe('RECALL: Related entity detection', () => {
  const url = 'http://localhost:4000/api/'

  beforeEach(() => {
    cy.request('POST', '/auth/signin', {
      email: 'user@email.com',
      password: 'password',
    })
  })

  // create observation

  it('Create observation', () => {
    cy.request({
      method: 'POST',
      url: url + 'observation',
      body: {
        ...observations[0],
      },
    }).then((response) => {
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

  // see if recall comes back

  // TODO create new observation

  // TODO should recall and update existing two
})
