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
        {
          _id: '63bb05073692ffa273fda236',
          content:
            "One of my most afraid of being a parent? Is probably that my children will be unhappy. That they'll grow up in this kind of crazy world that we have around us will continue to get crazier and crazier. It means that there's very limited opportunity for them to find who they are and to be who they are and to live the type of life that they want to live, but is probably a stupid fear and that the live whatever life they want to live. Whether I agree with it or not. I just want them to have opportunity at my my greatest fear is that they won't have opportunity.",
          evidence: '63b94ea2e0bdce18c17f686f',
        },
      ])

      expect(response.body.related.projects).to.deep.eq([
        {
          _id: '63b947da68e5d809ddc89a06',
          content:
            'Asking participants these questions... When did you become a parent? What are your favourite parts about being a parent? What are you most afraid of being a parent? What are your aspirations for your child?',
          title: 'Parenting study',
        },
      ])
    })
  })

  // see if recall comes back

  // TODO create new observation

  // TODO should recall and update existing two
})
